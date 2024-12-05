# `fleetAppsManagementSchedulerDefinition` Submodule <a name="`fleetAppsManagementSchedulerDefinition` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementSchedulerDefinition <a name="FleetAppsManagementSchedulerDefinition" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition oci_fleet_apps_management_scheduler_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinition;

FleetAppsManagementSchedulerDefinition.Builder.create(Construct scope, java.lang.String id)
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
    .actionGroups(IResolvable)
    .actionGroups(java.util.List<FleetAppsManagementSchedulerDefinitionActionGroups>)
    .compartmentId(java.lang.String)
    .schedule(FleetAppsManagementSchedulerDefinitionSchedule)
//  .activityInitiationCutOff(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .runBooks(IResolvable)
//  .runBooks(java.util.List<FleetAppsManagementSchedulerDefinitionRunBooks>)
//  .timeouts(FleetAppsManagementSchedulerDefinitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.actionGroups">actionGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>></code> | action_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.activityInitiationCutOff">activityInitiationCutOff</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.runBooks">runBooks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>></code> | run_books block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionGroups`<sup>Required</sup> <a name="actionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.actionGroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>>

action_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#action_groups FleetAppsManagementSchedulerDefinition#action_groups}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.schedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#schedule FleetAppsManagementSchedulerDefinition#schedule}

---

##### `activityInitiationCutOff`<sup>Optional</sup> <a name="activityInitiationCutOff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.activityInitiationCutOff"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runBooks`<sup>Optional</sup> <a name="runBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.runBooks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>>

run_books block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#run_books FleetAppsManagementSchedulerDefinition#run_books}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#timeouts FleetAppsManagementSchedulerDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putActionGroups">putActionGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putRunBooks">putRunBooks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetActivityInitiationCutOff">resetActivityInitiationCutOff</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetRunBooks">resetRunBooks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionGroups` <a name="putActionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putActionGroups"></a>

```java
public void putActionGroups(IResolvable OR java.util.List<FleetAppsManagementSchedulerDefinitionActionGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putActionGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>>

---

##### `putRunBooks` <a name="putRunBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putRunBooks"></a>

```java
public void putRunBooks(IResolvable OR java.util.List<FleetAppsManagementSchedulerDefinitionRunBooks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putRunBooks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>>

---

##### `putSchedule` <a name="putSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule"></a>

```java
public void putSchedule(FleetAppsManagementSchedulerDefinitionSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts"></a>

```java
public void putTimeouts(FleetAppsManagementSchedulerDefinitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>

---

##### `resetActivityInitiationCutOff` <a name="resetActivityInitiationCutOff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetActivityInitiationCutOff"></a>

```java
public void resetActivityInitiationCutOff()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetRunBooks` <a name="resetRunBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetRunBooks"></a>

```java
public void resetRunBooks()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinition;

FleetAppsManagementSchedulerDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinition;

FleetAppsManagementSchedulerDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinition;

FleetAppsManagementSchedulerDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinition;

FleetAppsManagementSchedulerDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FleetAppsManagementSchedulerDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FleetAppsManagementSchedulerDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FleetAppsManagementSchedulerDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementSchedulerDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroups">actionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList">FleetAppsManagementSchedulerDefinitionActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupTypes">actionGroupTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.applicationTypes">applicationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups">countOfAffectedActionGroups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedResources">countOfAffectedResources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets">countOfAffectedTargets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleOperations">lifecycleOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooks">runBooks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList">FleetAppsManagementSchedulerDefinitionRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference">FleetAppsManagementSchedulerDefinitionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeOfNextRun">timeOfNextRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference">FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupsInput">actionGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOffInput">activityInitiationCutOffInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooksInput">runBooksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.scheduleInput">scheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff">activityInitiationCutOff</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionGroups`<sup>Required</sup> <a name="actionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroups"></a>

```java
public FleetAppsManagementSchedulerDefinitionActionGroupsList getActionGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList">FleetAppsManagementSchedulerDefinitionActionGroupsList</a>

---

##### `actionGroupTypes`<sup>Required</sup> <a name="actionGroupTypes" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupTypes"></a>

```java
public java.util.List<java.lang.String> getActionGroupTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `applicationTypes`<sup>Required</sup> <a name="applicationTypes" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.applicationTypes"></a>

```java
public java.util.List<java.lang.String> getApplicationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `countOfAffectedActionGroups`<sup>Required</sup> <a name="countOfAffectedActionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups"></a>

```java
public java.lang.Number getCountOfAffectedActionGroups();
```

- *Type:* java.lang.Number

---

##### `countOfAffectedResources`<sup>Required</sup> <a name="countOfAffectedResources" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedResources"></a>

```java
public java.lang.Number getCountOfAffectedResources();
```

- *Type:* java.lang.Number

---

##### `countOfAffectedTargets`<sup>Required</sup> <a name="countOfAffectedTargets" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets"></a>

```java
public java.lang.Number getCountOfAffectedTargets();
```

- *Type:* java.lang.Number

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `lifecycleOperations`<sup>Required</sup> <a name="lifecycleOperations" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleOperations"></a>

```java
public java.util.List<java.lang.String> getLifecycleOperations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.resourceRegion"></a>

```java
public java.lang.String getResourceRegion();
```

- *Type:* java.lang.String

---

##### `runBooks`<sup>Required</sup> <a name="runBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooks"></a>

```java
public FleetAppsManagementSchedulerDefinitionRunBooksList getRunBooks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList">FleetAppsManagementSchedulerDefinitionRunBooksList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.schedule"></a>

```java
public FleetAppsManagementSchedulerDefinitionScheduleOutputReference getSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference">FleetAppsManagementSchedulerDefinitionScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfNextRun`<sup>Required</sup> <a name="timeOfNextRun" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeOfNextRun"></a>

```java
public java.lang.String getTimeOfNextRun();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeouts"></a>

```java
public FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference">FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `actionGroupsInput`<sup>Optional</sup> <a name="actionGroupsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupsInput"></a>

```java
public java.lang.Object getActionGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>>

---

##### `activityInitiationCutOffInput`<sup>Optional</sup> <a name="activityInitiationCutOffInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOffInput"></a>

```java
public java.lang.Number getActivityInitiationCutOffInput();
```

- *Type:* java.lang.Number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `runBooksInput`<sup>Optional</sup> <a name="runBooksInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooksInput"></a>

```java
public java.lang.Object getRunBooksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.scheduleInput"></a>

```java
public FleetAppsManagementSchedulerDefinitionSchedule getScheduleInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>

---

##### `activityInitiationCutOff`<sup>Required</sup> <a name="activityInitiationCutOff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff"></a>

```java
public java.lang.Number getActivityInitiationCutOff();
```

- *Type:* java.lang.Number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementSchedulerDefinitionActionGroups <a name="FleetAppsManagementSchedulerDefinitionActionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionActionGroups;

FleetAppsManagementSchedulerDefinitionActionGroups.builder()
    .resourceId(java.lang.String)
    .runbookId(java.lang.String)
//  .applicationType(java.lang.String)
//  .lifecycleOperation(java.lang.String)
//  .product(java.lang.String)
//  .subjects(java.util.List<java.lang.String>)
//  .targetId(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#resource_id FleetAppsManagementSchedulerDefinition#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.runbookId">runbookId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_id FleetAppsManagementSchedulerDefinition#runbook_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#application_type FleetAppsManagementSchedulerDefinition#application_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.lifecycleOperation">lifecycleOperation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#lifecycle_operation FleetAppsManagementSchedulerDefinition#lifecycle_operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.product">product</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#product FleetAppsManagementSchedulerDefinition#product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.subjects">subjects</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#subjects FleetAppsManagementSchedulerDefinition#subjects}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#target_id FleetAppsManagementSchedulerDefinition#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#resource_id FleetAppsManagementSchedulerDefinition#resource_id}.

---

##### `runbookId`<sup>Required</sup> <a name="runbookId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.runbookId"></a>

```java
public java.lang.String getRunbookId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_id FleetAppsManagementSchedulerDefinition#runbook_id}.

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#application_type FleetAppsManagementSchedulerDefinition#application_type}.

---

##### `lifecycleOperation`<sup>Optional</sup> <a name="lifecycleOperation" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.lifecycleOperation"></a>

```java
public java.lang.String getLifecycleOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#lifecycle_operation FleetAppsManagementSchedulerDefinition#lifecycle_operation}.

---

##### `product`<sup>Optional</sup> <a name="product" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#product FleetAppsManagementSchedulerDefinition#product}.

---

##### `subjects`<sup>Optional</sup> <a name="subjects" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.subjects"></a>

```java
public java.util.List<java.lang.String> getSubjects();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#subjects FleetAppsManagementSchedulerDefinition#subjects}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#target_id FleetAppsManagementSchedulerDefinition#target_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}.

---

### FleetAppsManagementSchedulerDefinitionConfig <a name="FleetAppsManagementSchedulerDefinitionConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionConfig;

FleetAppsManagementSchedulerDefinitionConfig.builder()
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
    .actionGroups(IResolvable)
    .actionGroups(java.util.List<FleetAppsManagementSchedulerDefinitionActionGroups>)
    .compartmentId(java.lang.String)
    .schedule(FleetAppsManagementSchedulerDefinitionSchedule)
//  .activityInitiationCutOff(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .runBooks(IResolvable)
//  .runBooks(java.util.List<FleetAppsManagementSchedulerDefinitionRunBooks>)
//  .timeouts(FleetAppsManagementSchedulerDefinitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.actionGroups">actionGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>></code> | action_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.activityInitiationCutOff">activityInitiationCutOff</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.runBooks">runBooks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>></code> | run_books block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionGroups`<sup>Required</sup> <a name="actionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.actionGroups"></a>

```java
public java.lang.Object getActionGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>>

action_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#action_groups FleetAppsManagementSchedulerDefinition#action_groups}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.schedule"></a>

```java
public FleetAppsManagementSchedulerDefinitionSchedule getSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#schedule FleetAppsManagementSchedulerDefinition#schedule}

---

##### `activityInitiationCutOff`<sup>Optional</sup> <a name="activityInitiationCutOff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.activityInitiationCutOff"></a>

```java
public java.lang.Number getActivityInitiationCutOff();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runBooks`<sup>Optional</sup> <a name="runBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.runBooks"></a>

```java
public java.lang.Object getRunBooks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>>

run_books block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#run_books FleetAppsManagementSchedulerDefinition#run_books}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.timeouts"></a>

```java
public FleetAppsManagementSchedulerDefinitionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#timeouts FleetAppsManagementSchedulerDefinition#timeouts}

---

### FleetAppsManagementSchedulerDefinitionRunBooks <a name="FleetAppsManagementSchedulerDefinitionRunBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionRunBooks;

FleetAppsManagementSchedulerDefinitionRunBooks.builder()
    .id(java.lang.String)
//  .inputParameters(IResolvable)
//  .inputParameters(java.util.List<FleetAppsManagementSchedulerDefinitionRunBooksInputParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.inputParameters">inputParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>></code> | input_parameters block. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameters`<sup>Optional</sup> <a name="inputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.inputParameters"></a>

```java
public java.lang.Object getInputParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>>

input_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#input_parameters FleetAppsManagementSchedulerDefinition#input_parameters}

---

### FleetAppsManagementSchedulerDefinitionRunBooksInputParameters <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters;

FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.builder()
    .stepName(java.lang.String)
//  .arguments(IResolvable)
//  .arguments(java.util.List<FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.stepName">stepName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#step_name FleetAppsManagementSchedulerDefinition#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.arguments">arguments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>></code> | arguments block. |

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.stepName"></a>

```java
public java.lang.String getStepName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#step_name FleetAppsManagementSchedulerDefinition#step_name}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.arguments"></a>

```java
public java.lang.Object getArguments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>>

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#arguments FleetAppsManagementSchedulerDefinition#arguments}

---

### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments;

FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.builder()
    .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#name FleetAppsManagementSchedulerDefinition#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#value FleetAppsManagementSchedulerDefinition#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#name FleetAppsManagementSchedulerDefinition#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#value FleetAppsManagementSchedulerDefinition#value}.

---

### FleetAppsManagementSchedulerDefinitionSchedule <a name="FleetAppsManagementSchedulerDefinitionSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionSchedule;

FleetAppsManagementSchedulerDefinitionSchedule.builder()
    .executionStartdate(java.lang.String)
    .type(java.lang.String)
//  .duration(java.lang.String)
//  .maintenanceWindowId(java.lang.String)
//  .recurrences(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.executionStartdate">executionStartdate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#execution_startdate FleetAppsManagementSchedulerDefinition#execution_startdate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#duration FleetAppsManagementSchedulerDefinition#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#maintenance_window_id FleetAppsManagementSchedulerDefinition#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.recurrences">recurrences</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#recurrences FleetAppsManagementSchedulerDefinition#recurrences}. |

---

##### `executionStartdate`<sup>Required</sup> <a name="executionStartdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.executionStartdate"></a>

```java
public java.lang.String getExecutionStartdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#execution_startdate FleetAppsManagementSchedulerDefinition#execution_startdate}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#duration FleetAppsManagementSchedulerDefinition#duration}.

---

##### `maintenanceWindowId`<sup>Optional</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.maintenanceWindowId"></a>

```java
public java.lang.String getMaintenanceWindowId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#maintenance_window_id FleetAppsManagementSchedulerDefinition#maintenance_window_id}.

---

##### `recurrences`<sup>Optional</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.recurrences"></a>

```java
public java.lang.String getRecurrences();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#recurrences FleetAppsManagementSchedulerDefinition#recurrences}.

---

### FleetAppsManagementSchedulerDefinitionTimeouts <a name="FleetAppsManagementSchedulerDefinitionTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionTimeouts;

FleetAppsManagementSchedulerDefinitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#create FleetAppsManagementSchedulerDefinition#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#delete FleetAppsManagementSchedulerDefinition#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#update FleetAppsManagementSchedulerDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#create FleetAppsManagementSchedulerDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#delete FleetAppsManagementSchedulerDefinition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#update FleetAppsManagementSchedulerDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementSchedulerDefinitionActionGroupsList <a name="FleetAppsManagementSchedulerDefinitionActionGroupsList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionActionGroupsList;

new FleetAppsManagementSchedulerDefinitionActionGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.get"></a>

```java
public FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>>

---


### FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference <a name="FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference;

new FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetLifecycleOperation">resetLifecycleOperation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetSubjects">resetSubjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationType` <a name="resetApplicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetApplicationType"></a>

```java
public void resetApplicationType()
```

##### `resetLifecycleOperation` <a name="resetLifecycleOperation" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetLifecycleOperation"></a>

```java
public void resetLifecycleOperation()
```

##### `resetProduct` <a name="resetProduct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetProduct"></a>

```java
public void resetProduct()
```

##### `resetSubjects` <a name="resetSubjects" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetSubjects"></a>

```java
public void resetSubjects()
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetTargetId"></a>

```java
public void resetTargetId()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationTypeInput">applicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperationInput">lifecycleOperationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookIdInput">runbookIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjectsInput">subjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation">lifecycleOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId">runbookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects">subjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationTypeInput"></a>

```java
public java.lang.String getApplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `lifecycleOperationInput`<sup>Optional</sup> <a name="lifecycleOperationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperationInput"></a>

```java
public java.lang.String getLifecycleOperationInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `runbookIdInput`<sup>Optional</sup> <a name="runbookIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookIdInput"></a>

```java
public java.lang.String getRunbookIdInput();
```

- *Type:* java.lang.String

---

##### `subjectsInput`<sup>Optional</sup> <a name="subjectsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjectsInput"></a>

```java
public java.util.List<java.lang.String> getSubjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `lifecycleOperation`<sup>Required</sup> <a name="lifecycleOperation" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation"></a>

```java
public java.lang.String getLifecycleOperation();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `runbookId`<sup>Required</sup> <a name="runbookId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId"></a>

```java
public java.lang.String getRunbookId();
```

- *Type:* java.lang.String

---

##### `subjects`<sup>Required</sup> <a name="subjects" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects"></a>

```java
public java.util.List<java.lang.String> getSubjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups">FleetAppsManagementSchedulerDefinitionActionGroups</a>

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList;

new FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get"></a>

```java
public FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>>

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference;

new FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList;

new FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get"></a>

```java
public FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>>

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference;

new FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.putArguments">putArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resetArguments">resetArguments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArguments` <a name="putArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.putArguments"></a>

```java
public void putArguments(IResolvable OR java.util.List<FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.putArguments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>>

---

##### `resetArguments` <a name="resetArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resetArguments"></a>

```java
public void resetArguments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments">arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepNameInput">stepNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName">stepName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments"></a>

```java
public FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList getArguments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.argumentsInput"></a>

```java
public java.lang.Object getArgumentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>>

---

##### `stepNameInput`<sup>Optional</sup> <a name="stepNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepNameInput"></a>

```java
public java.lang.String getStepNameInput();
```

- *Type:* java.lang.String

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName"></a>

```java
public java.lang.String getStepName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>

---


### FleetAppsManagementSchedulerDefinitionRunBooksList <a name="FleetAppsManagementSchedulerDefinitionRunBooksList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionRunBooksList;

new FleetAppsManagementSchedulerDefinitionRunBooksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.get"></a>

```java
public FleetAppsManagementSchedulerDefinitionRunBooksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>>

---


### FleetAppsManagementSchedulerDefinitionRunBooksOutputReference <a name="FleetAppsManagementSchedulerDefinitionRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference;

new FleetAppsManagementSchedulerDefinitionRunBooksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.putInputParameters">putInputParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resetInputParameters">resetInputParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputParameters` <a name="putInputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.putInputParameters"></a>

```java
public void putInputParameters(IResolvable OR java.util.List<FleetAppsManagementSchedulerDefinitionRunBooksInputParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.putInputParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>>

---

##### `resetInputParameters` <a name="resetInputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resetInputParameters"></a>

```java
public void resetInputParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters">inputParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParametersInput">inputParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputParameters`<sup>Required</sup> <a name="inputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters"></a>

```java
public FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList getInputParameters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputParametersInput`<sup>Optional</sup> <a name="inputParametersInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParametersInput"></a>

```java
public java.lang.Object getInputParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters">FleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks">FleetAppsManagementSchedulerDefinitionRunBooks</a>

---


### FleetAppsManagementSchedulerDefinitionScheduleOutputReference <a name="FleetAppsManagementSchedulerDefinitionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference;

new FleetAppsManagementSchedulerDefinitionScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetMaintenanceWindowId">resetMaintenanceWindowId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetRecurrences">resetRecurrences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetMaintenanceWindowId` <a name="resetMaintenanceWindowId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetMaintenanceWindowId"></a>

```java
public void resetMaintenanceWindowId()
```

##### `resetRecurrences` <a name="resetRecurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetRecurrences"></a>

```java
public void resetRecurrences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdateInput">executionStartdateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowIdInput">maintenanceWindowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrencesInput">recurrencesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate">executionStartdate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId">maintenanceWindowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences">recurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `executionStartdateInput`<sup>Optional</sup> <a name="executionStartdateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdateInput"></a>

```java
public java.lang.String getExecutionStartdateInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowIdInput`<sup>Optional</sup> <a name="maintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowIdInput"></a>

```java
public java.lang.String getMaintenanceWindowIdInput();
```

- *Type:* java.lang.String

---

##### `recurrencesInput`<sup>Optional</sup> <a name="recurrencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrencesInput"></a>

```java
public java.lang.String getRecurrencesInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `executionStartdate`<sup>Required</sup> <a name="executionStartdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate"></a>

```java
public java.lang.String getExecutionStartdate();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowId`<sup>Required</sup> <a name="maintenanceWindowId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId"></a>

```java
public java.lang.String getMaintenanceWindowId();
```

- *Type:* java.lang.String

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences"></a>

```java
public java.lang.String getRecurrences();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue"></a>

```java
public FleetAppsManagementSchedulerDefinitionSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

---


### FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference <a name="FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_scheduler_definition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference;

new FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>

---



