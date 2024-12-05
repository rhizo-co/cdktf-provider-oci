# `stackMonitoringDiscoveryJob` Submodule <a name="`stackMonitoringDiscoveryJob` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringDiscoveryJob <a name="StackMonitoringDiscoveryJob" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job oci_stack_monitoring_discovery_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJob;

StackMonitoringDiscoveryJob.Builder.create(Construct scope, java.lang.String id)
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
    .discoveryDetails(StackMonitoringDiscoveryJobDiscoveryDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .discoveryClient(java.lang.String)
//  .discoveryType(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .shouldPropagateTagsToDiscoveredResources(java.lang.Boolean)
//  .shouldPropagateTagsToDiscoveredResources(IResolvable)
//  .timeouts(StackMonitoringDiscoveryJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#compartment_id StackMonitoringDiscoveryJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.discoveryDetails">discoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a></code> | discovery_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#defined_tags StackMonitoringDiscoveryJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.discoveryClient">discoveryClient</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_client StackMonitoringDiscoveryJob#discovery_client}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_type StackMonitoringDiscoveryJob#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#freeform_tags StackMonitoringDiscoveryJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#id StackMonitoringDiscoveryJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.shouldPropagateTagsToDiscoveredResources">shouldPropagateTagsToDiscoveredResources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#should_propagate_tags_to_discovered_resources StackMonitoringDiscoveryJob#should_propagate_tags_to_discovered_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#compartment_id StackMonitoringDiscoveryJob#compartment_id}.

---

##### `discoveryDetails`<sup>Required</sup> <a name="discoveryDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.discoveryDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a>

discovery_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_details StackMonitoringDiscoveryJob#discovery_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#defined_tags StackMonitoringDiscoveryJob#defined_tags}.

---

##### `discoveryClient`<sup>Optional</sup> <a name="discoveryClient" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.discoveryClient"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_client StackMonitoringDiscoveryJob#discovery_client}.

---

##### `discoveryType`<sup>Optional</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.discoveryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_type StackMonitoringDiscoveryJob#discovery_type}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#freeform_tags StackMonitoringDiscoveryJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#id StackMonitoringDiscoveryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shouldPropagateTagsToDiscoveredResources`<sup>Optional</sup> <a name="shouldPropagateTagsToDiscoveredResources" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.shouldPropagateTagsToDiscoveredResources"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#should_propagate_tags_to_discovered_resources StackMonitoringDiscoveryJob#should_propagate_tags_to_discovered_resources}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#timeouts StackMonitoringDiscoveryJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putDiscoveryDetails">putDiscoveryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDiscoveryClient">resetDiscoveryClient</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDiscoveryType">resetDiscoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetShouldPropagateTagsToDiscoveredResources">resetShouldPropagateTagsToDiscoveredResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiscoveryDetails` <a name="putDiscoveryDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putDiscoveryDetails"></a>

```java
public void putDiscoveryDetails(StackMonitoringDiscoveryJobDiscoveryDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putDiscoveryDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putTimeouts"></a>

```java
public void putTimeouts(StackMonitoringDiscoveryJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDiscoveryClient` <a name="resetDiscoveryClient" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDiscoveryClient"></a>

```java
public void resetDiscoveryClient()
```

##### `resetDiscoveryType` <a name="resetDiscoveryType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetDiscoveryType"></a>

```java
public void resetDiscoveryType()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetId"></a>

```java
public void resetId()
```

##### `resetShouldPropagateTagsToDiscoveredResources` <a name="resetShouldPropagateTagsToDiscoveredResources" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetShouldPropagateTagsToDiscoveredResources"></a>

```java
public void resetShouldPropagateTagsToDiscoveredResources()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringDiscoveryJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJob;

StackMonitoringDiscoveryJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJob;

StackMonitoringDiscoveryJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJob;

StackMonitoringDiscoveryJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJob;

StackMonitoringDiscoveryJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StackMonitoringDiscoveryJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StackMonitoringDiscoveryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StackMonitoringDiscoveryJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StackMonitoringDiscoveryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringDiscoveryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryDetails">discoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference">StackMonitoringDiscoveryJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryClientInput">discoveryClientInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryDetailsInput">discoveryDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryTypeInput">discoveryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResourcesInput">shouldPropagateTagsToDiscoveredResourcesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryClient">discoveryClient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResources">shouldPropagateTagsToDiscoveredResources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `discoveryDetails`<sup>Required</sup> <a name="discoveryDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryDetails"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference getDiscoveryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeouts"></a>

```java
public StackMonitoringDiscoveryJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference">StackMonitoringDiscoveryJobTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryClientInput`<sup>Optional</sup> <a name="discoveryClientInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryClientInput"></a>

```java
public java.lang.String getDiscoveryClientInput();
```

- *Type:* java.lang.String

---

##### `discoveryDetailsInput`<sup>Optional</sup> <a name="discoveryDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryDetailsInput"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetails getDiscoveryDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a>

---

##### `discoveryTypeInput`<sup>Optional</sup> <a name="discoveryTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryTypeInput"></a>

```java
public java.lang.String getDiscoveryTypeInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `shouldPropagateTagsToDiscoveredResourcesInput`<sup>Optional</sup> <a name="shouldPropagateTagsToDiscoveredResourcesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResourcesInput"></a>

```java
public java.lang.Object getShouldPropagateTagsToDiscoveredResourcesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryClient`<sup>Required</sup> <a name="discoveryClient" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryClient"></a>

```java
public java.lang.String getDiscoveryClient();
```

- *Type:* java.lang.String

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.discoveryType"></a>

```java
public java.lang.String getDiscoveryType();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `shouldPropagateTagsToDiscoveredResources`<sup>Required</sup> <a name="shouldPropagateTagsToDiscoveredResources" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.shouldPropagateTagsToDiscoveredResources"></a>

```java
public java.lang.Object getShouldPropagateTagsToDiscoveredResources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringDiscoveryJobConfig <a name="StackMonitoringDiscoveryJobConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobConfig;

StackMonitoringDiscoveryJobConfig.builder()
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
    .discoveryDetails(StackMonitoringDiscoveryJobDiscoveryDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .discoveryClient(java.lang.String)
//  .discoveryType(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .shouldPropagateTagsToDiscoveredResources(java.lang.Boolean)
//  .shouldPropagateTagsToDiscoveredResources(IResolvable)
//  .timeouts(StackMonitoringDiscoveryJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#compartment_id StackMonitoringDiscoveryJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryDetails">discoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a></code> | discovery_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#defined_tags StackMonitoringDiscoveryJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryClient">discoveryClient</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_client StackMonitoringDiscoveryJob#discovery_client}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryType">discoveryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_type StackMonitoringDiscoveryJob#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#freeform_tags StackMonitoringDiscoveryJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#id StackMonitoringDiscoveryJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.shouldPropagateTagsToDiscoveredResources">shouldPropagateTagsToDiscoveredResources</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#should_propagate_tags_to_discovered_resources StackMonitoringDiscoveryJob#should_propagate_tags_to_discovered_resources}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#compartment_id StackMonitoringDiscoveryJob#compartment_id}.

---

##### `discoveryDetails`<sup>Required</sup> <a name="discoveryDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryDetails"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetails getDiscoveryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a>

discovery_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_details StackMonitoringDiscoveryJob#discovery_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#defined_tags StackMonitoringDiscoveryJob#defined_tags}.

---

##### `discoveryClient`<sup>Optional</sup> <a name="discoveryClient" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryClient"></a>

```java
public java.lang.String getDiscoveryClient();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_client StackMonitoringDiscoveryJob#discovery_client}.

---

##### `discoveryType`<sup>Optional</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.discoveryType"></a>

```java
public java.lang.String getDiscoveryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#discovery_type StackMonitoringDiscoveryJob#discovery_type}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#freeform_tags StackMonitoringDiscoveryJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#id StackMonitoringDiscoveryJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shouldPropagateTagsToDiscoveredResources`<sup>Optional</sup> <a name="shouldPropagateTagsToDiscoveredResources" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.shouldPropagateTagsToDiscoveredResources"></a>

```java
public java.lang.Object getShouldPropagateTagsToDiscoveredResources();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#should_propagate_tags_to_discovered_resources StackMonitoringDiscoveryJob#should_propagate_tags_to_discovered_resources}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobConfig.property.timeouts"></a>

```java
public StackMonitoringDiscoveryJobTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#timeouts StackMonitoringDiscoveryJob#timeouts}

---

### StackMonitoringDiscoveryJobDiscoveryDetails <a name="StackMonitoringDiscoveryJobDiscoveryDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetails;

StackMonitoringDiscoveryJobDiscoveryDetails.builder()
    .agentId(java.lang.String)
    .properties(StackMonitoringDiscoveryJobDiscoveryDetailsProperties)
    .resourceName(java.lang.String)
    .resourceType(java.lang.String)
//  .credentials(StackMonitoringDiscoveryJobDiscoveryDetailsCredentials)
//  .license(java.lang.String)
//  .tags(StackMonitoringDiscoveryJobDiscoveryDetailsTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.agentId">agentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#agent_id StackMonitoringDiscoveryJob#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a></code> | properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_name StackMonitoringDiscoveryJob#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_type StackMonitoringDiscoveryJob#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.license">license</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#license StackMonitoringDiscoveryJob#license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a></code> | tags block. |

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#agent_id StackMonitoringDiscoveryJob#agent_id}.

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.properties"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsProperties getProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties StackMonitoringDiscoveryJob#properties}

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_name StackMonitoringDiscoveryJob#resource_name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#resource_type StackMonitoringDiscoveryJob#resource_type}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.credentials"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentials getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credentials StackMonitoringDiscoveryJob#credentials}

---

##### `license`<sup>Optional</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#license StackMonitoringDiscoveryJob#license}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails.property.tags"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsTags getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#tags StackMonitoringDiscoveryJob#tags}

---

### StackMonitoringDiscoveryJobDiscoveryDetailsCredentials <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials;

StackMonitoringDiscoveryJobDiscoveryDetailsCredentials.builder()
    .items(IResolvable)
    .items(java.util.List<StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials.property.items">items</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>></code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials.property.items"></a>

```java
public java.lang.Object getItems();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#items StackMonitoringDiscoveryJob#items}

---

### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems;

StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.builder()
    .credentialName(java.lang.String)
    .credentialType(java.lang.String)
    .properties(StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_name StackMonitoringDiscoveryJob#credential_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_type StackMonitoringDiscoveryJob#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a></code> | properties block. |

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_name StackMonitoringDiscoveryJob#credential_name}.

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#credential_type StackMonitoringDiscoveryJob#credential_type}.

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems.property.properties"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties getProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties StackMonitoringDiscoveryJob#properties}

---

### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties;

StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties.builder()
//  .propertiesMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties.property.propertiesMap">propertiesMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}. |

---

##### `propertiesMap`<sup>Optional</sup> <a name="propertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties.property.propertiesMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}.

---

### StackMonitoringDiscoveryJobDiscoveryDetailsProperties <a name="StackMonitoringDiscoveryJobDiscoveryDetailsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsProperties;

StackMonitoringDiscoveryJobDiscoveryDetailsProperties.builder()
//  .propertiesMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties.property.propertiesMap">propertiesMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}. |

---

##### `propertiesMap`<sup>Optional</sup> <a name="propertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties.property.propertiesMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}.

---

### StackMonitoringDiscoveryJobDiscoveryDetailsTags <a name="StackMonitoringDiscoveryJobDiscoveryDetailsTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsTags;

StackMonitoringDiscoveryJobDiscoveryDetailsTags.builder()
//  .propertiesMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags.property.propertiesMap">propertiesMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}. |

---

##### `propertiesMap`<sup>Optional</sup> <a name="propertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags.property.propertiesMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#properties_map StackMonitoringDiscoveryJob#properties_map}.

---

### StackMonitoringDiscoveryJobTimeouts <a name="StackMonitoringDiscoveryJobTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobTimeouts;

StackMonitoringDiscoveryJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#create StackMonitoringDiscoveryJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#delete StackMonitoringDiscoveryJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#update StackMonitoringDiscoveryJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#create StackMonitoringDiscoveryJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#delete StackMonitoringDiscoveryJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_discovery_job#update StackMonitoringDiscoveryJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.putProperties">putProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.putProperties"></a>

```java
public void putProperties(StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.properties"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference getProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference</a>

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialNameInput"></a>

```java
public java.lang.String getCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.propertiesInput"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties getPropertiesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resetPropertiesMap">resetPropertiesMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropertiesMap` <a name="resetPropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.resetPropertiesMap"></a>

```java
public void resetPropertiesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMapInput">propertiesMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMap">propertiesMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propertiesMapInput`<sup>Optional</sup> <a name="propertiesMapInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `propertiesMap`<sup>Required</sup> <a name="propertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.propertiesMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsPropertiesOutputReference.property.internalValue"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsProperties</a>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference;

new StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.putItems"></a>

```java
public void putItems(IResolvable OR java.util.List<StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.putItems.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.itemsInput">itemsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.items"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.itemsInput"></a>

```java
public java.lang.Object getItemsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference.property.internalValue"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference;

new StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetLicense">resetLicense</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putCredentials"></a>

```java
public void putCredentials(StackMonitoringDiscoveryJobDiscoveryDetailsCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

---

##### `putProperties` <a name="putProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putProperties"></a>

```java
public void putProperties(StackMonitoringDiscoveryJobDiscoveryDetailsProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

---

##### `putTags` <a name="putTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putTags"></a>

```java
public void putTags(StackMonitoringDiscoveryJobDiscoveryDetailsTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

---

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetLicense` <a name="resetLicense" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetLicense"></a>

```java
public void resetLicense()
```

##### `resetTags` <a name="resetTags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentIdInput">agentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.licenseInput">licenseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentId">agentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.license">license</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentials"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsCredentialsOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.properties"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference getProperties();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tags"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference getTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference">StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference</a>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentIdInput"></a>

```java
public java.lang.String getAgentIdInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.credentialsInput"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsCredentials getCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsCredentials">StackMonitoringDiscoveryJobDiscoveryDetailsCredentials</a>

---

##### `licenseInput`<sup>Optional</sup> <a name="licenseInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.licenseInput"></a>

```java
public java.lang.String getLicenseInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.propertiesInput"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsProperties getPropertiesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.tagsInput"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsTags getTagsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.agentId"></a>

```java
public java.lang.String getAgentId();
```

- *Type:* java.lang.String

---

##### `license`<sup>Required</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.license"></a>

```java
public java.lang.String getLicense();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsOutputReference.property.internalValue"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetails">StackMonitoringDiscoveryJobDiscoveryDetails</a>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference;

new StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resetPropertiesMap">resetPropertiesMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropertiesMap` <a name="resetPropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.resetPropertiesMap"></a>

```java
public void resetPropertiesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMapInput">propertiesMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMap">propertiesMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propertiesMapInput`<sup>Optional</sup> <a name="propertiesMapInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `propertiesMap`<sup>Required</sup> <a name="propertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.propertiesMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsPropertiesOutputReference.property.internalValue"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsProperties getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsProperties">StackMonitoringDiscoveryJobDiscoveryDetailsProperties</a>

---


### StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference <a name="StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference;

new StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resetPropertiesMap">resetPropertiesMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropertiesMap` <a name="resetPropertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.resetPropertiesMap"></a>

```java
public void resetPropertiesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMapInput">propertiesMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMap">propertiesMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propertiesMapInput`<sup>Optional</sup> <a name="propertiesMapInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `propertiesMap`<sup>Required</sup> <a name="propertiesMap" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.propertiesMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTagsOutputReference.property.internalValue"></a>

```java
public StackMonitoringDiscoveryJobDiscoveryDetailsTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobDiscoveryDetailsTags">StackMonitoringDiscoveryJobDiscoveryDetailsTags</a>

---


### StackMonitoringDiscoveryJobTimeoutsOutputReference <a name="StackMonitoringDiscoveryJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_discovery_job.StackMonitoringDiscoveryJobTimeoutsOutputReference;

new StackMonitoringDiscoveryJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringDiscoveryJob.StackMonitoringDiscoveryJobTimeouts">StackMonitoringDiscoveryJobTimeouts</a>

---



