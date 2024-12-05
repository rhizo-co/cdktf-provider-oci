# `fleetAppsManagementMaintenanceWindow` Submodule <a name="`fleetAppsManagementMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementMaintenanceWindow <a name="FleetAppsManagementMaintenanceWindow" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window oci_fleet_apps_management_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_maintenance_window.FleetAppsManagementMaintenanceWindow;

FleetAppsManagementMaintenanceWindow.Builder.create(Construct scope, java.lang.String id)
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
    .duration(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isOutage(java.lang.Boolean)
//  .isOutage(IResolvable)
//  .isRecurring(java.lang.Boolean)
//  .isRecurring(IResolvable)
//  .maintenanceWindowType(java.lang.String)
//  .recurrences(java.lang.String)
//  .taskInitiationCutoff(java.lang.Number)
//  .timeouts(FleetAppsManagementMaintenanceWindowTimeouts)
//  .timeScheduleStart(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.isOutage">isOutage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.isRecurring">isRecurring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.maintenanceWindowType">maintenanceWindowType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.recurrences">recurrences</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.taskInitiationCutoff">taskInitiationCutoff</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.timeScheduleStart">timeScheduleStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.duration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOutage`<sup>Optional</sup> <a name="isOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.isOutage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}.

---

##### `isRecurring`<sup>Optional</sup> <a name="isRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.isRecurring"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}.

---

##### `maintenanceWindowType`<sup>Optional</sup> <a name="maintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.maintenanceWindowType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}.

---

##### `recurrences`<sup>Optional</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.recurrences"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}.

---

##### `taskInitiationCutoff`<sup>Optional</sup> <a name="taskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.taskInitiationCutoff"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#timeouts FleetAppsManagementMaintenanceWindow#timeouts}

---

##### `timeScheduleStart`<sup>Optional</sup> <a name="timeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.Initializer.parameter.timeScheduleStart"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsOutage">resetIsOutage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsRecurring">resetIsRecurring</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetMaintenanceWindowType">resetMaintenanceWindowType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetRecurrences">resetRecurrences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTaskInitiationCutoff">resetTaskInitiationCutoff</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeScheduleStart">resetTimeScheduleStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts"></a>

```java
public void putTimeouts(FleetAppsManagementMaintenanceWindowTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetId"></a>

```java
public void resetId()
```

##### `resetIsOutage` <a name="resetIsOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsOutage"></a>

```java
public void resetIsOutage()
```

##### `resetIsRecurring` <a name="resetIsRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetIsRecurring"></a>

```java
public void resetIsRecurring()
```

##### `resetMaintenanceWindowType` <a name="resetMaintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetMaintenanceWindowType"></a>

```java
public void resetMaintenanceWindowType()
```

##### `resetRecurrences` <a name="resetRecurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetRecurrences"></a>

```java
public void resetRecurrences()
```

##### `resetTaskInitiationCutoff` <a name="resetTaskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTaskInitiationCutoff"></a>

```java
public void resetTaskInitiationCutoff()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeScheduleStart` <a name="resetTimeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.resetTimeScheduleStart"></a>

```java
public void resetTimeScheduleStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_maintenance_window.FleetAppsManagementMaintenanceWindow;

FleetAppsManagementMaintenanceWindow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_maintenance_window.FleetAppsManagementMaintenanceWindow;

FleetAppsManagementMaintenanceWindow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_maintenance_window.FleetAppsManagementMaintenanceWindow;

FleetAppsManagementMaintenanceWindow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_maintenance_window.FleetAppsManagementMaintenanceWindow;

FleetAppsManagementMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FleetAppsManagementMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FleetAppsManagementMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FleetAppsManagementMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FleetAppsManagementMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference">FleetAppsManagementMaintenanceWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutageInput">isOutageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurringInput">isRecurringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowTypeInput">maintenanceWindowTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrencesInput">recurrencesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoffInput">taskInitiationCutoffInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStartInput">timeScheduleStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutage">isOutage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurring">isRecurring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowType">maintenanceWindowType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrences">recurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff">taskInitiationCutoff</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStart">timeScheduleStart</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.resourceRegion"></a>

```java
public java.lang.String getResourceRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeouts"></a>

```java
public FleetAppsManagementMaintenanceWindowTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference">FleetAppsManagementMaintenanceWindowTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isOutageInput`<sup>Optional</sup> <a name="isOutageInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutageInput"></a>

```java
public java.lang.Object getIsOutageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRecurringInput`<sup>Optional</sup> <a name="isRecurringInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurringInput"></a>

```java
public java.lang.Object getIsRecurringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintenanceWindowTypeInput`<sup>Optional</sup> <a name="maintenanceWindowTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowTypeInput"></a>

```java
public java.lang.String getMaintenanceWindowTypeInput();
```

- *Type:* java.lang.String

---

##### `recurrencesInput`<sup>Optional</sup> <a name="recurrencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrencesInput"></a>

```java
public java.lang.String getRecurrencesInput();
```

- *Type:* java.lang.String

---

##### `taskInitiationCutoffInput`<sup>Optional</sup> <a name="taskInitiationCutoffInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoffInput"></a>

```java
public java.lang.Number getTaskInitiationCutoffInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

---

##### `timeScheduleStartInput`<sup>Optional</sup> <a name="timeScheduleStartInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStartInput"></a>

```java
public java.lang.String getTimeScheduleStartInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isOutage`<sup>Required</sup> <a name="isOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isOutage"></a>

```java
public java.lang.Object getIsOutage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRecurring`<sup>Required</sup> <a name="isRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.isRecurring"></a>

```java
public java.lang.Object getIsRecurring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintenanceWindowType`<sup>Required</sup> <a name="maintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.maintenanceWindowType"></a>

```java
public java.lang.String getMaintenanceWindowType();
```

- *Type:* java.lang.String

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.recurrences"></a>

```java
public java.lang.String getRecurrences();
```

- *Type:* java.lang.String

---

##### `taskInitiationCutoff`<sup>Required</sup> <a name="taskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.taskInitiationCutoff"></a>

```java
public java.lang.Number getTaskInitiationCutoff();
```

- *Type:* java.lang.Number

---

##### `timeScheduleStart`<sup>Required</sup> <a name="timeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.timeScheduleStart"></a>

```java
public java.lang.String getTimeScheduleStart();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementMaintenanceWindowConfig <a name="FleetAppsManagementMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_maintenance_window.FleetAppsManagementMaintenanceWindowConfig;

FleetAppsManagementMaintenanceWindowConfig.builder()
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
    .duration(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isOutage(java.lang.Boolean)
//  .isOutage(IResolvable)
//  .isRecurring(java.lang.Boolean)
//  .isRecurring(IResolvable)
//  .maintenanceWindowType(java.lang.String)
//  .recurrences(java.lang.String)
//  .taskInitiationCutoff(java.lang.Number)
//  .timeouts(FleetAppsManagementMaintenanceWindowTimeouts)
//  .timeScheduleStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.duration">duration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isOutage">isOutage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isRecurring">isRecurring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowType">maintenanceWindowType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.recurrences">recurrences</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.taskInitiationCutoff">taskInitiationCutoff</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeScheduleStart">timeScheduleStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#compartment_id FleetAppsManagementMaintenanceWindow#compartment_id}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#duration FleetAppsManagementMaintenanceWindow#duration}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#defined_tags FleetAppsManagementMaintenanceWindow#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#description FleetAppsManagementMaintenanceWindow#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#display_name FleetAppsManagementMaintenanceWindow#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#freeform_tags FleetAppsManagementMaintenanceWindow#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#id FleetAppsManagementMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isOutage`<sup>Optional</sup> <a name="isOutage" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isOutage"></a>

```java
public java.lang.Object getIsOutage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_outage FleetAppsManagementMaintenanceWindow#is_outage}.

---

##### `isRecurring`<sup>Optional</sup> <a name="isRecurring" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.isRecurring"></a>

```java
public java.lang.Object getIsRecurring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#is_recurring FleetAppsManagementMaintenanceWindow#is_recurring}.

---

##### `maintenanceWindowType`<sup>Optional</sup> <a name="maintenanceWindowType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.maintenanceWindowType"></a>

```java
public java.lang.String getMaintenanceWindowType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#maintenance_window_type FleetAppsManagementMaintenanceWindow#maintenance_window_type}.

---

##### `recurrences`<sup>Optional</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.recurrences"></a>

```java
public java.lang.String getRecurrences();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#recurrences FleetAppsManagementMaintenanceWindow#recurrences}.

---

##### `taskInitiationCutoff`<sup>Optional</sup> <a name="taskInitiationCutoff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.taskInitiationCutoff"></a>

```java
public java.lang.Number getTaskInitiationCutoff();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#task_initiation_cutoff FleetAppsManagementMaintenanceWindow#task_initiation_cutoff}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeouts"></a>

```java
public FleetAppsManagementMaintenanceWindowTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#timeouts FleetAppsManagementMaintenanceWindow#timeouts}

---

##### `timeScheduleStart`<sup>Optional</sup> <a name="timeScheduleStart" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowConfig.property.timeScheduleStart"></a>

```java
public java.lang.String getTimeScheduleStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#time_schedule_start FleetAppsManagementMaintenanceWindow#time_schedule_start}.

---

### FleetAppsManagementMaintenanceWindowTimeouts <a name="FleetAppsManagementMaintenanceWindowTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_maintenance_window.FleetAppsManagementMaintenanceWindowTimeouts;

FleetAppsManagementMaintenanceWindowTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#create FleetAppsManagementMaintenanceWindow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#delete FleetAppsManagementMaintenanceWindow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_maintenance_window#update FleetAppsManagementMaintenanceWindow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementMaintenanceWindowTimeoutsOutputReference <a name="FleetAppsManagementMaintenanceWindowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_maintenance_window.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference;

new FleetAppsManagementMaintenanceWindowTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementMaintenanceWindow.FleetAppsManagementMaintenanceWindowTimeouts">FleetAppsManagementMaintenanceWindowTimeouts</a>

---



