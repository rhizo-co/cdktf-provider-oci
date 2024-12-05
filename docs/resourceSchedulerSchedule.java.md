# `resourceSchedulerSchedule` Submodule <a name="`resourceSchedulerSchedule` Submodule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceSchedulerSchedule <a name="ResourceSchedulerSchedule" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule oci_resource_scheduler_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerSchedule;

ResourceSchedulerSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .action(java.lang.String)
    .compartmentId(java.lang.String)
    .recurrenceDetails(java.lang.String)
    .recurrenceType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .resourceFilters(IResolvable)
//  .resourceFilters(java.util.List<ResourceSchedulerScheduleResourceFilters>)
//  .resources(IResolvable)
//  .resources(java.util.List<ResourceSchedulerScheduleResources>)
//  .state(java.lang.String)
//  .timeEnds(java.lang.String)
//  .timeouts(ResourceSchedulerScheduleTimeouts)
//  .timeStarts(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.recurrenceDetails">recurrenceDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.resourceFilters">resourceFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>></code> | resource_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.resources">resources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>></code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeEnds">timeEnds</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeStarts">timeStarts</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}.

---

##### `recurrenceDetails`<sup>Required</sup> <a name="recurrenceDetails" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.recurrenceDetails"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.recurrenceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceFilters`<sup>Optional</sup> <a name="resourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.resourceFilters"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>>

resource_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resource_filters ResourceSchedulerSchedule#resource_filters}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.resources"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resources ResourceSchedulerSchedule#resources}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}.

---

##### `timeEnds`<sup>Optional</sup> <a name="timeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeEnds"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#timeouts ResourceSchedulerSchedule#timeouts}

---

##### `timeStarts`<sup>Optional</sup> <a name="timeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.Initializer.parameter.timeStarts"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters">putResourceFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources">putResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters">resetResourceFilters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds">resetTimeEnds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts">resetTimeStarts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceFilters` <a name="putResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters"></a>

```java
public void putResourceFilters(IResolvable OR java.util.List<ResourceSchedulerScheduleResourceFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResourceFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>>

---

##### `putResources` <a name="putResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources"></a>

```java
public void putResources(IResolvable OR java.util.List<ResourceSchedulerScheduleResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putResources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts"></a>

```java
public void putTimeouts(ResourceSchedulerScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetResourceFilters` <a name="resetResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResourceFilters"></a>

```java
public void resetResourceFilters()
```

##### `resetResources` <a name="resetResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetResources"></a>

```java
public void resetResources()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetState"></a>

```java
public void resetState()
```

##### `resetTimeEnds` <a name="resetTimeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeEnds"></a>

```java
public void resetTimeEnds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeStarts` <a name="resetTimeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.resetTimeStarts"></a>

```java
public void resetTimeStarts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerSchedule;

ResourceSchedulerSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerSchedule;

ResourceSchedulerSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerSchedule;

ResourceSchedulerSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerSchedule;

ResourceSchedulerSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceSchedulerSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceSchedulerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceSchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResourceSchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters">resourceFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun">timeLastRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun">timeNextRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput">recurrenceDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput">recurrenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput">resourceFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput">resourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput">timeEndsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput">timeStartsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails">recurrenceDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds">timeEnds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts">timeStarts</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceFilters`<sup>Required</sup> <a name="resourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFilters"></a>

```java
public ResourceSchedulerScheduleResourceFiltersList getResourceFilters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList">ResourceSchedulerScheduleResourceFiltersList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resources"></a>

```java
public ResourceSchedulerScheduleResourcesList getResources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList">ResourceSchedulerScheduleResourcesList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastRun`<sup>Required</sup> <a name="timeLastRun" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeLastRun"></a>

```java
public java.lang.String getTimeLastRun();
```

- *Type:* java.lang.String

---

##### `timeNextRun`<sup>Required</sup> <a name="timeNextRun" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeNextRun"></a>

```java
public java.lang.String getTimeNextRun();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeouts"></a>

```java
public ResourceSchedulerScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference">ResourceSchedulerScheduleTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `recurrenceDetailsInput`<sup>Optional</sup> <a name="recurrenceDetailsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetailsInput"></a>

```java
public java.lang.String getRecurrenceDetailsInput();
```

- *Type:* java.lang.String

---

##### `recurrenceTypeInput`<sup>Optional</sup> <a name="recurrenceTypeInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceTypeInput"></a>

```java
public java.lang.String getRecurrenceTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceFiltersInput`<sup>Optional</sup> <a name="resourceFiltersInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourceFiltersInput"></a>

```java
public java.lang.Object getResourceFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.resourcesInput"></a>

```java
public java.lang.Object getResourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeEndsInput`<sup>Optional</sup> <a name="timeEndsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEndsInput"></a>

```java
public java.lang.String getTimeEndsInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

---

##### `timeStartsInput`<sup>Optional</sup> <a name="timeStartsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStartsInput"></a>

```java
public java.lang.String getTimeStartsInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recurrenceDetails`<sup>Required</sup> <a name="recurrenceDetails" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceDetails"></a>

```java
public java.lang.String getRecurrenceDetails();
```

- *Type:* java.lang.String

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeEnds`<sup>Required</sup> <a name="timeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeEnds"></a>

```java
public java.lang.String getTimeEnds();
```

- *Type:* java.lang.String

---

##### `timeStarts`<sup>Required</sup> <a name="timeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.timeStarts"></a>

```java
public java.lang.String getTimeStarts();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceSchedulerScheduleConfig <a name="ResourceSchedulerScheduleConfig" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleConfig;

ResourceSchedulerScheduleConfig.builder()
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
    .action(java.lang.String)
    .compartmentId(java.lang.String)
    .recurrenceDetails(java.lang.String)
    .recurrenceType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .resourceFilters(IResolvable)
//  .resourceFilters(java.util.List<ResourceSchedulerScheduleResourceFilters>)
//  .resources(IResolvable)
//  .resources(java.util.List<ResourceSchedulerScheduleResources>)
//  .state(java.lang.String)
//  .timeEnds(java.lang.String)
//  .timeouts(ResourceSchedulerScheduleTimeouts)
//  .timeStarts(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails">recurrenceDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType">recurrenceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters">resourceFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>></code> | resource_filters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources">resources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>></code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds">timeEnds</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts">timeStarts</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}.

---

##### `recurrenceDetails`<sup>Required</sup> <a name="recurrenceDetails" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceDetails"></a>

```java
public java.lang.String getRecurrenceDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}.

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.recurrenceType"></a>

```java
public java.lang.String getRecurrenceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceFilters`<sup>Optional</sup> <a name="resourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resourceFilters"></a>

```java
public java.lang.Object getResourceFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>>

resource_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resource_filters ResourceSchedulerSchedule#resource_filters}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.resources"></a>

```java
public java.lang.Object getResources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#resources ResourceSchedulerSchedule#resources}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}.

---

##### `timeEnds`<sup>Optional</sup> <a name="timeEnds" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeEnds"></a>

```java
public java.lang.String getTimeEnds();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeouts"></a>

```java
public ResourceSchedulerScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#timeouts ResourceSchedulerSchedule#timeouts}

---

##### `timeStarts`<sup>Optional</sup> <a name="timeStarts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleConfig.property.timeStarts"></a>

```java
public java.lang.String getTimeStarts();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}.

---

### ResourceSchedulerScheduleResourceFilters <a name="ResourceSchedulerScheduleResourceFilters" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleResourceFilters;

ResourceSchedulerScheduleResourceFilters.builder()
    .attribute(java.lang.String)
//  .condition(java.lang.String)
//  .shouldIncludeChildCompartments(java.lang.Boolean)
//  .shouldIncludeChildCompartments(IResolvable)
//  .value(IResolvable)
//  .value(java.util.List<ResourceSchedulerScheduleResourceFiltersValue>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments">shouldIncludeChildCompartments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value">value</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>></code> | value block. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}.

---

##### `shouldIncludeChildCompartments`<sup>Optional</sup> <a name="shouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.shouldIncludeChildCompartments"></a>

```java
public java.lang.Object getShouldIncludeChildCompartments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}

---

### ResourceSchedulerScheduleResourceFiltersValue <a name="ResourceSchedulerScheduleResourceFiltersValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleResourceFiltersValue;

ResourceSchedulerScheduleResourceFiltersValue.builder()
//  .namespace(java.lang.String)
//  .tagKey(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}. |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}.

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}.

---

### ResourceSchedulerScheduleResources <a name="ResourceSchedulerScheduleResources" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleResources;

ResourceSchedulerScheduleResources.builder()
    .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}.

---

### ResourceSchedulerScheduleTimeouts <a name="ResourceSchedulerScheduleTimeouts" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleTimeouts;

ResourceSchedulerScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceSchedulerScheduleResourceFiltersList <a name="ResourceSchedulerScheduleResourceFiltersList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleResourceFiltersList;

new ResourceSchedulerScheduleResourceFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get"></a>

```java
public ResourceSchedulerScheduleResourceFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>>

---


### ResourceSchedulerScheduleResourceFiltersOutputReference <a name="ResourceSchedulerScheduleResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleResourceFiltersOutputReference;

new ResourceSchedulerScheduleResourceFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments">resetShouldIncludeChildCompartments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue"></a>

```java
public void putValue(IResolvable OR java.util.List<ResourceSchedulerScheduleResourceFiltersValue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.putValue.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>>

---

##### `resetCondition` <a name="resetCondition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetShouldIncludeChildCompartments` <a name="resetShouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetShouldIncludeChildCompartments"></a>

```java
public void resetShouldIncludeChildCompartments()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value">value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput">shouldIncludeChildCompartmentsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments">shouldIncludeChildCompartments</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.value"></a>

```java
public ResourceSchedulerScheduleResourceFiltersValueList getValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList">ResourceSchedulerScheduleResourceFiltersValueList</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `shouldIncludeChildCompartmentsInput`<sup>Optional</sup> <a name="shouldIncludeChildCompartmentsInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartmentsInput"></a>

```java
public java.lang.Object getShouldIncludeChildCompartmentsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `shouldIncludeChildCompartments`<sup>Required</sup> <a name="shouldIncludeChildCompartments" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```java
public java.lang.Object getShouldIncludeChildCompartments();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFilters">ResourceSchedulerScheduleResourceFilters</a>

---


### ResourceSchedulerScheduleResourceFiltersValueList <a name="ResourceSchedulerScheduleResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleResourceFiltersValueList;

new ResourceSchedulerScheduleResourceFiltersValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get"></a>

```java
public ResourceSchedulerScheduleResourceFiltersValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>>

---


### ResourceSchedulerScheduleResourceFiltersValueOutputReference <a name="ResourceSchedulerScheduleResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference;

new ResourceSchedulerScheduleResourceFiltersValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTagKey` <a name="resetTagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourceFiltersValue">ResourceSchedulerScheduleResourceFiltersValue</a>

---


### ResourceSchedulerScheduleResourcesList <a name="ResourceSchedulerScheduleResourcesList" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleResourcesList;

new ResourceSchedulerScheduleResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get"></a>

```java
public ResourceSchedulerScheduleResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>>

---


### ResourceSchedulerScheduleResourcesOutputReference <a name="ResourceSchedulerScheduleResourcesOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleResourcesOutputReference;

new ResourceSchedulerScheduleResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadata` <a name="resetMetadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleResources">ResourceSchedulerScheduleResources</a>

---


### ResourceSchedulerScheduleTimeoutsOutputReference <a name="ResourceSchedulerScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.resource_scheduler_schedule.ResourceSchedulerScheduleTimeoutsOutputReference;

new ResourceSchedulerScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.resourceSchedulerSchedule.ResourceSchedulerScheduleTimeouts">ResourceSchedulerScheduleTimeouts</a>

---



