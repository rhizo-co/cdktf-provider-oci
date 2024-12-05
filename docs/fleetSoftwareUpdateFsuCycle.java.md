# `fleetSoftwareUpdateFsuCycle` Submodule <a name="`fleetSoftwareUpdateFsuCycle` Submodule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetSoftwareUpdateFsuCycle <a name="FleetSoftwareUpdateFsuCycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle oci_fleet_software_update_fsu_cycle}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycle;

FleetSoftwareUpdateFsuCycle.Builder.create(Construct scope, java.lang.String id)
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
    .fsuCollectionId(java.lang.String)
    .goalVersionDetails(FleetSoftwareUpdateFsuCycleGoalVersionDetails)
    .type(java.lang.String)
//  .applyActionSchedule(FleetSoftwareUpdateFsuCycleApplyActionSchedule)
//  .batchingStrategy(FleetSoftwareUpdateFsuCycleBatchingStrategy)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .diagnosticsCollection(FleetSoftwareUpdateFsuCycleDiagnosticsCollection)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isIgnoreMissingPatches(java.util.List<java.lang.String>)
//  .isIgnorePatches(java.lang.Boolean)
//  .isIgnorePatches(IResolvable)
//  .isKeepPlacement(java.lang.Boolean)
//  .isKeepPlacement(IResolvable)
//  .maxDrainTimeoutInSeconds(java.lang.Number)
//  .stageActionSchedule(FleetSoftwareUpdateFsuCycleStageActionSchedule)
//  .timeouts(FleetSoftwareUpdateFsuCycleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#compartment_id FleetSoftwareUpdateFsuCycle#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.fsuCollectionId">fsuCollectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#fsu_collection_id FleetSoftwareUpdateFsuCycle#fsu_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.goalVersionDetails">goalVersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a></code> | goal_version_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.applyActionSchedule">applyActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a></code> | apply_action_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.batchingStrategy">batchingStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a></code> | batching_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#defined_tags FleetSoftwareUpdateFsuCycle#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.diagnosticsCollection">diagnosticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a></code> | diagnostics_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#display_name FleetSoftwareUpdateFsuCycle#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#freeform_tags FleetSoftwareUpdateFsuCycle#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#id FleetSoftwareUpdateFsuCycle#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.isIgnoreMissingPatches">isIgnoreMissingPatches</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_missing_patches FleetSoftwareUpdateFsuCycle#is_ignore_missing_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.isIgnorePatches">isIgnorePatches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_patches FleetSoftwareUpdateFsuCycle#is_ignore_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.isKeepPlacement">isKeepPlacement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_keep_placement FleetSoftwareUpdateFsuCycle#is_keep_placement}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.maxDrainTimeoutInSeconds">maxDrainTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#max_drain_timeout_in_seconds FleetSoftwareUpdateFsuCycle#max_drain_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.stageActionSchedule">stageActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a></code> | stage_action_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#compartment_id FleetSoftwareUpdateFsuCycle#compartment_id}.

---

##### `fsuCollectionId`<sup>Required</sup> <a name="fsuCollectionId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.fsuCollectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#fsu_collection_id FleetSoftwareUpdateFsuCycle#fsu_collection_id}.

---

##### `goalVersionDetails`<sup>Required</sup> <a name="goalVersionDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.goalVersionDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

goal_version_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#goal_version_details FleetSoftwareUpdateFsuCycle#goal_version_details}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

##### `applyActionSchedule`<sup>Optional</sup> <a name="applyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.applyActionSchedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

apply_action_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#apply_action_schedule FleetSoftwareUpdateFsuCycle#apply_action_schedule}

---

##### `batchingStrategy`<sup>Optional</sup> <a name="batchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.batchingStrategy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a>

batching_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#batching_strategy FleetSoftwareUpdateFsuCycle#batching_strategy}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#defined_tags FleetSoftwareUpdateFsuCycle#defined_tags}.

---

##### `diagnosticsCollection`<sup>Optional</sup> <a name="diagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.diagnosticsCollection"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

diagnostics_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#diagnostics_collection FleetSoftwareUpdateFsuCycle#diagnostics_collection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#display_name FleetSoftwareUpdateFsuCycle#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#freeform_tags FleetSoftwareUpdateFsuCycle#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#id FleetSoftwareUpdateFsuCycle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIgnoreMissingPatches`<sup>Optional</sup> <a name="isIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.isIgnoreMissingPatches"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_missing_patches FleetSoftwareUpdateFsuCycle#is_ignore_missing_patches}.

---

##### `isIgnorePatches`<sup>Optional</sup> <a name="isIgnorePatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.isIgnorePatches"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_patches FleetSoftwareUpdateFsuCycle#is_ignore_patches}.

---

##### `isKeepPlacement`<sup>Optional</sup> <a name="isKeepPlacement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.isKeepPlacement"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_keep_placement FleetSoftwareUpdateFsuCycle#is_keep_placement}.

---

##### `maxDrainTimeoutInSeconds`<sup>Optional</sup> <a name="maxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.maxDrainTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#max_drain_timeout_in_seconds FleetSoftwareUpdateFsuCycle#max_drain_timeout_in_seconds}.

---

##### `stageActionSchedule`<sup>Optional</sup> <a name="stageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.stageActionSchedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a>

stage_action_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#stage_action_schedule FleetSoftwareUpdateFsuCycle#stage_action_schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#timeouts FleetSoftwareUpdateFsuCycle#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putApplyActionSchedule">putApplyActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putBatchingStrategy">putBatchingStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putDiagnosticsCollection">putDiagnosticsCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putGoalVersionDetails">putGoalVersionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putStageActionSchedule">putStageActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetApplyActionSchedule">resetApplyActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetBatchingStrategy">resetBatchingStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDiagnosticsCollection">resetDiagnosticsCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsIgnoreMissingPatches">resetIsIgnoreMissingPatches</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsIgnorePatches">resetIsIgnorePatches</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsKeepPlacement">resetIsKeepPlacement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetMaxDrainTimeoutInSeconds">resetMaxDrainTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetStageActionSchedule">resetStageActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplyActionSchedule` <a name="putApplyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putApplyActionSchedule"></a>

```java
public void putApplyActionSchedule(FleetSoftwareUpdateFsuCycleApplyActionSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putApplyActionSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

---

##### `putBatchingStrategy` <a name="putBatchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putBatchingStrategy"></a>

```java
public void putBatchingStrategy(FleetSoftwareUpdateFsuCycleBatchingStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putBatchingStrategy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a>

---

##### `putDiagnosticsCollection` <a name="putDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putDiagnosticsCollection"></a>

```java
public void putDiagnosticsCollection(FleetSoftwareUpdateFsuCycleDiagnosticsCollection value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putDiagnosticsCollection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

---

##### `putGoalVersionDetails` <a name="putGoalVersionDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putGoalVersionDetails"></a>

```java
public void putGoalVersionDetails(FleetSoftwareUpdateFsuCycleGoalVersionDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putGoalVersionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

---

##### `putStageActionSchedule` <a name="putStageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putStageActionSchedule"></a>

```java
public void putStageActionSchedule(FleetSoftwareUpdateFsuCycleStageActionSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putStageActionSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putTimeouts"></a>

```java
public void putTimeouts(FleetSoftwareUpdateFsuCycleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a>

---

##### `resetApplyActionSchedule` <a name="resetApplyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetApplyActionSchedule"></a>

```java
public void resetApplyActionSchedule()
```

##### `resetBatchingStrategy` <a name="resetBatchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetBatchingStrategy"></a>

```java
public void resetBatchingStrategy()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDiagnosticsCollection` <a name="resetDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDiagnosticsCollection"></a>

```java
public void resetDiagnosticsCollection()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetId"></a>

```java
public void resetId()
```

##### `resetIsIgnoreMissingPatches` <a name="resetIsIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsIgnoreMissingPatches"></a>

```java
public void resetIsIgnoreMissingPatches()
```

##### `resetIsIgnorePatches` <a name="resetIsIgnorePatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsIgnorePatches"></a>

```java
public void resetIsIgnorePatches()
```

##### `resetIsKeepPlacement` <a name="resetIsKeepPlacement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetIsKeepPlacement"></a>

```java
public void resetIsKeepPlacement()
```

##### `resetMaxDrainTimeoutInSeconds` <a name="resetMaxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetMaxDrainTimeoutInSeconds"></a>

```java
public void resetMaxDrainTimeoutInSeconds()
```

##### `resetStageActionSchedule` <a name="resetStageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetStageActionSchedule"></a>

```java
public void resetStageActionSchedule()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycle;

FleetSoftwareUpdateFsuCycle.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycle;

FleetSoftwareUpdateFsuCycle.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycle;

FleetSoftwareUpdateFsuCycle.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycle;

FleetSoftwareUpdateFsuCycle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FleetSoftwareUpdateFsuCycle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FleetSoftwareUpdateFsuCycle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FleetSoftwareUpdateFsuCycle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FleetSoftwareUpdateFsuCycle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.applyActionSchedule">applyActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference">FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.batchingStrategy">batchingStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference">FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.collectionType">collectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.diagnosticsCollection">diagnosticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference">FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.executingFsuActionId">executingFsuActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.goalVersionDetails">goalVersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference">FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lastCompletedAction">lastCompletedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.nextActionToExecute">nextActionToExecute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList">FleetSoftwareUpdateFsuCycleNextActionToExecuteList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.stageActionSchedule">stageActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference">FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference">FleetSoftwareUpdateFsuCycleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.applyActionScheduleInput">applyActionScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.batchingStrategyInput">batchingStrategyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.diagnosticsCollectionInput">diagnosticsCollectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fsuCollectionIdInput">fsuCollectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.goalVersionDetailsInput">goalVersionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatchesInput">isIgnoreMissingPatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnorePatchesInput">isIgnorePatchesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isKeepPlacementInput">isKeepPlacementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSecondsInput">maxDrainTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.stageActionScheduleInput">stageActionScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fsuCollectionId">fsuCollectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatches">isIgnoreMissingPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnorePatches">isIgnorePatches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isKeepPlacement">isKeepPlacement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSeconds">maxDrainTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applyActionSchedule`<sup>Required</sup> <a name="applyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.applyActionSchedule"></a>

```java
public FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference getApplyActionSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference">FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference</a>

---

##### `batchingStrategy`<sup>Required</sup> <a name="batchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.batchingStrategy"></a>

```java
public FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference getBatchingStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference">FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference</a>

---

##### `collectionType`<sup>Required</sup> <a name="collectionType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.collectionType"></a>

```java
public java.lang.String getCollectionType();
```

- *Type:* java.lang.String

---

##### `diagnosticsCollection`<sup>Required</sup> <a name="diagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.diagnosticsCollection"></a>

```java
public FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference getDiagnosticsCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference">FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference</a>

---

##### `executingFsuActionId`<sup>Required</sup> <a name="executingFsuActionId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.executingFsuActionId"></a>

```java
public java.lang.String getExecutingFsuActionId();
```

- *Type:* java.lang.String

---

##### `goalVersionDetails`<sup>Required</sup> <a name="goalVersionDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.goalVersionDetails"></a>

```java
public FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference getGoalVersionDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference">FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference</a>

---

##### `lastCompletedAction`<sup>Required</sup> <a name="lastCompletedAction" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lastCompletedAction"></a>

```java
public java.lang.String getLastCompletedAction();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `nextActionToExecute`<sup>Required</sup> <a name="nextActionToExecute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.nextActionToExecute"></a>

```java
public FleetSoftwareUpdateFsuCycleNextActionToExecuteList getNextActionToExecute();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList">FleetSoftwareUpdateFsuCycleNextActionToExecuteList</a>

---

##### `stageActionSchedule`<sup>Required</sup> <a name="stageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.stageActionSchedule"></a>

```java
public FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference getStageActionSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference">FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeouts"></a>

```java
public FleetSoftwareUpdateFsuCycleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference">FleetSoftwareUpdateFsuCycleTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `applyActionScheduleInput`<sup>Optional</sup> <a name="applyActionScheduleInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.applyActionScheduleInput"></a>

```java
public FleetSoftwareUpdateFsuCycleApplyActionSchedule getApplyActionScheduleInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

---

##### `batchingStrategyInput`<sup>Optional</sup> <a name="batchingStrategyInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.batchingStrategyInput"></a>

```java
public FleetSoftwareUpdateFsuCycleBatchingStrategy getBatchingStrategyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `diagnosticsCollectionInput`<sup>Optional</sup> <a name="diagnosticsCollectionInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.diagnosticsCollectionInput"></a>

```java
public FleetSoftwareUpdateFsuCycleDiagnosticsCollection getDiagnosticsCollectionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fsuCollectionIdInput`<sup>Optional</sup> <a name="fsuCollectionIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fsuCollectionIdInput"></a>

```java
public java.lang.String getFsuCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `goalVersionDetailsInput`<sup>Optional</sup> <a name="goalVersionDetailsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.goalVersionDetailsInput"></a>

```java
public FleetSoftwareUpdateFsuCycleGoalVersionDetails getGoalVersionDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isIgnoreMissingPatchesInput`<sup>Optional</sup> <a name="isIgnoreMissingPatchesInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatchesInput"></a>

```java
public java.util.List<java.lang.String> getIsIgnoreMissingPatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isIgnorePatchesInput`<sup>Optional</sup> <a name="isIgnorePatchesInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnorePatchesInput"></a>

```java
public java.lang.Object getIsIgnorePatchesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isKeepPlacementInput`<sup>Optional</sup> <a name="isKeepPlacementInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isKeepPlacementInput"></a>

```java
public java.lang.Object getIsKeepPlacementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxDrainTimeoutInSecondsInput`<sup>Optional</sup> <a name="maxDrainTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSecondsInput"></a>

```java
public java.lang.Number getMaxDrainTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `stageActionScheduleInput`<sup>Optional</sup> <a name="stageActionScheduleInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.stageActionScheduleInput"></a>

```java
public FleetSoftwareUpdateFsuCycleStageActionSchedule getStageActionScheduleInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fsuCollectionId`<sup>Required</sup> <a name="fsuCollectionId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.fsuCollectionId"></a>

```java
public java.lang.String getFsuCollectionId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isIgnoreMissingPatches`<sup>Required</sup> <a name="isIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatches"></a>

```java
public java.util.List<java.lang.String> getIsIgnoreMissingPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isIgnorePatches`<sup>Required</sup> <a name="isIgnorePatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isIgnorePatches"></a>

```java
public java.lang.Object getIsIgnorePatches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isKeepPlacement`<sup>Required</sup> <a name="isKeepPlacement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.isKeepPlacement"></a>

```java
public java.lang.Object getIsKeepPlacement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxDrainTimeoutInSeconds`<sup>Required</sup> <a name="maxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSeconds"></a>

```java
public java.lang.Number getMaxDrainTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycle.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FleetSoftwareUpdateFsuCycleApplyActionSchedule <a name="FleetSoftwareUpdateFsuCycleApplyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule;

FleetSoftwareUpdateFsuCycleApplyActionSchedule.builder()
    .timeToStart(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.property.timeToStart">timeToStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.property.timeToStart"></a>

```java
public java.lang.String getTimeToStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

### FleetSoftwareUpdateFsuCycleBatchingStrategy <a name="FleetSoftwareUpdateFsuCycleBatchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleBatchingStrategy;

FleetSoftwareUpdateFsuCycleBatchingStrategy.builder()
//  .isForceRolling(java.lang.Boolean)
//  .isForceRolling(IResolvable)
//  .isWaitForBatchResume(java.lang.Boolean)
//  .isWaitForBatchResume(IResolvable)
//  .percentage(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.isForceRolling">isForceRolling</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_force_rolling FleetSoftwareUpdateFsuCycle#is_force_rolling}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.isWaitForBatchResume">isWaitForBatchResume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_wait_for_batch_resume FleetSoftwareUpdateFsuCycle#is_wait_for_batch_resume}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#percentage FleetSoftwareUpdateFsuCycle#percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |

---

##### `isForceRolling`<sup>Optional</sup> <a name="isForceRolling" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.isForceRolling"></a>

```java
public java.lang.Object getIsForceRolling();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_force_rolling FleetSoftwareUpdateFsuCycle#is_force_rolling}.

---

##### `isWaitForBatchResume`<sup>Optional</sup> <a name="isWaitForBatchResume" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.isWaitForBatchResume"></a>

```java
public java.lang.Object getIsWaitForBatchResume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_wait_for_batch_resume FleetSoftwareUpdateFsuCycle#is_wait_for_batch_resume}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#percentage FleetSoftwareUpdateFsuCycle#percentage}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

### FleetSoftwareUpdateFsuCycleConfig <a name="FleetSoftwareUpdateFsuCycleConfig" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleConfig;

FleetSoftwareUpdateFsuCycleConfig.builder()
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
    .fsuCollectionId(java.lang.String)
    .goalVersionDetails(FleetSoftwareUpdateFsuCycleGoalVersionDetails)
    .type(java.lang.String)
//  .applyActionSchedule(FleetSoftwareUpdateFsuCycleApplyActionSchedule)
//  .batchingStrategy(FleetSoftwareUpdateFsuCycleBatchingStrategy)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .diagnosticsCollection(FleetSoftwareUpdateFsuCycleDiagnosticsCollection)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isIgnoreMissingPatches(java.util.List<java.lang.String>)
//  .isIgnorePatches(java.lang.Boolean)
//  .isIgnorePatches(IResolvable)
//  .isKeepPlacement(java.lang.Boolean)
//  .isKeepPlacement(IResolvable)
//  .maxDrainTimeoutInSeconds(java.lang.Number)
//  .stageActionSchedule(FleetSoftwareUpdateFsuCycleStageActionSchedule)
//  .timeouts(FleetSoftwareUpdateFsuCycleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#compartment_id FleetSoftwareUpdateFsuCycle#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.fsuCollectionId">fsuCollectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#fsu_collection_id FleetSoftwareUpdateFsuCycle#fsu_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.goalVersionDetails">goalVersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a></code> | goal_version_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.applyActionSchedule">applyActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a></code> | apply_action_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.batchingStrategy">batchingStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a></code> | batching_strategy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#defined_tags FleetSoftwareUpdateFsuCycle#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.diagnosticsCollection">diagnosticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a></code> | diagnostics_collection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#display_name FleetSoftwareUpdateFsuCycle#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#freeform_tags FleetSoftwareUpdateFsuCycle#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#id FleetSoftwareUpdateFsuCycle#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isIgnoreMissingPatches">isIgnoreMissingPatches</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_missing_patches FleetSoftwareUpdateFsuCycle#is_ignore_missing_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isIgnorePatches">isIgnorePatches</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_patches FleetSoftwareUpdateFsuCycle#is_ignore_patches}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isKeepPlacement">isKeepPlacement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_keep_placement FleetSoftwareUpdateFsuCycle#is_keep_placement}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.maxDrainTimeoutInSeconds">maxDrainTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#max_drain_timeout_in_seconds FleetSoftwareUpdateFsuCycle#max_drain_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.stageActionSchedule">stageActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a></code> | stage_action_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#compartment_id FleetSoftwareUpdateFsuCycle#compartment_id}.

---

##### `fsuCollectionId`<sup>Required</sup> <a name="fsuCollectionId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.fsuCollectionId"></a>

```java
public java.lang.String getFsuCollectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#fsu_collection_id FleetSoftwareUpdateFsuCycle#fsu_collection_id}.

---

##### `goalVersionDetails`<sup>Required</sup> <a name="goalVersionDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.goalVersionDetails"></a>

```java
public FleetSoftwareUpdateFsuCycleGoalVersionDetails getGoalVersionDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

goal_version_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#goal_version_details FleetSoftwareUpdateFsuCycle#goal_version_details}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

##### `applyActionSchedule`<sup>Optional</sup> <a name="applyActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.applyActionSchedule"></a>

```java
public FleetSoftwareUpdateFsuCycleApplyActionSchedule getApplyActionSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

apply_action_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#apply_action_schedule FleetSoftwareUpdateFsuCycle#apply_action_schedule}

---

##### `batchingStrategy`<sup>Optional</sup> <a name="batchingStrategy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.batchingStrategy"></a>

```java
public FleetSoftwareUpdateFsuCycleBatchingStrategy getBatchingStrategy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a>

batching_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#batching_strategy FleetSoftwareUpdateFsuCycle#batching_strategy}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#defined_tags FleetSoftwareUpdateFsuCycle#defined_tags}.

---

##### `diagnosticsCollection`<sup>Optional</sup> <a name="diagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.diagnosticsCollection"></a>

```java
public FleetSoftwareUpdateFsuCycleDiagnosticsCollection getDiagnosticsCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

diagnostics_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#diagnostics_collection FleetSoftwareUpdateFsuCycle#diagnostics_collection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#display_name FleetSoftwareUpdateFsuCycle#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#freeform_tags FleetSoftwareUpdateFsuCycle#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#id FleetSoftwareUpdateFsuCycle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIgnoreMissingPatches`<sup>Optional</sup> <a name="isIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isIgnoreMissingPatches"></a>

```java
public java.util.List<java.lang.String> getIsIgnoreMissingPatches();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_missing_patches FleetSoftwareUpdateFsuCycle#is_ignore_missing_patches}.

---

##### `isIgnorePatches`<sup>Optional</sup> <a name="isIgnorePatches" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isIgnorePatches"></a>

```java
public java.lang.Object getIsIgnorePatches();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_ignore_patches FleetSoftwareUpdateFsuCycle#is_ignore_patches}.

---

##### `isKeepPlacement`<sup>Optional</sup> <a name="isKeepPlacement" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.isKeepPlacement"></a>

```java
public java.lang.Object getIsKeepPlacement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#is_keep_placement FleetSoftwareUpdateFsuCycle#is_keep_placement}.

---

##### `maxDrainTimeoutInSeconds`<sup>Optional</sup> <a name="maxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.maxDrainTimeoutInSeconds"></a>

```java
public java.lang.Number getMaxDrainTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#max_drain_timeout_in_seconds FleetSoftwareUpdateFsuCycle#max_drain_timeout_in_seconds}.

---

##### `stageActionSchedule`<sup>Optional</sup> <a name="stageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.stageActionSchedule"></a>

```java
public FleetSoftwareUpdateFsuCycleStageActionSchedule getStageActionSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a>

stage_action_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#stage_action_schedule FleetSoftwareUpdateFsuCycle#stage_action_schedule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleConfig.property.timeouts"></a>

```java
public FleetSoftwareUpdateFsuCycleTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#timeouts FleetSoftwareUpdateFsuCycle#timeouts}

---

### FleetSoftwareUpdateFsuCycleDiagnosticsCollection <a name="FleetSoftwareUpdateFsuCycleDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection;

FleetSoftwareUpdateFsuCycleDiagnosticsCollection.builder()
//  .logCollectionMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection.property.logCollectionMode">logCollectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#log_collection_mode FleetSoftwareUpdateFsuCycle#log_collection_mode}. |

---

##### `logCollectionMode`<sup>Optional</sup> <a name="logCollectionMode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection.property.logCollectionMode"></a>

```java
public java.lang.String getLogCollectionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#log_collection_mode FleetSoftwareUpdateFsuCycle#log_collection_mode}.

---

### FleetSoftwareUpdateFsuCycleGoalVersionDetails <a name="FleetSoftwareUpdateFsuCycleGoalVersionDetails" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails;

FleetSoftwareUpdateFsuCycleGoalVersionDetails.builder()
    .type(java.lang.String)
//  .homePolicy(java.lang.String)
//  .newHomePrefix(java.lang.String)
//  .softwareImageId(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.homePolicy">homePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#home_policy FleetSoftwareUpdateFsuCycle#home_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.newHomePrefix">newHomePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#new_home_prefix FleetSoftwareUpdateFsuCycle#new_home_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.softwareImageId">softwareImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#software_image_id FleetSoftwareUpdateFsuCycle#software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#version FleetSoftwareUpdateFsuCycle#version}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

##### `homePolicy`<sup>Optional</sup> <a name="homePolicy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.homePolicy"></a>

```java
public java.lang.String getHomePolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#home_policy FleetSoftwareUpdateFsuCycle#home_policy}.

---

##### `newHomePrefix`<sup>Optional</sup> <a name="newHomePrefix" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.newHomePrefix"></a>

```java
public java.lang.String getNewHomePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#new_home_prefix FleetSoftwareUpdateFsuCycle#new_home_prefix}.

---

##### `softwareImageId`<sup>Optional</sup> <a name="softwareImageId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.softwareImageId"></a>

```java
public java.lang.String getSoftwareImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#software_image_id FleetSoftwareUpdateFsuCycle#software_image_id}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#version FleetSoftwareUpdateFsuCycle#version}.

---

### FleetSoftwareUpdateFsuCycleNextActionToExecute <a name="FleetSoftwareUpdateFsuCycleNextActionToExecute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleNextActionToExecute;

FleetSoftwareUpdateFsuCycleNextActionToExecute.builder()
    .build();
```


### FleetSoftwareUpdateFsuCycleStageActionSchedule <a name="FleetSoftwareUpdateFsuCycleStageActionSchedule" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleStageActionSchedule;

FleetSoftwareUpdateFsuCycleStageActionSchedule.builder()
    .timeToStart(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.property.timeToStart">timeToStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}. |

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.property.timeToStart"></a>

```java
public java.lang.String getTimeToStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#time_to_start FleetSoftwareUpdateFsuCycle#time_to_start}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#type FleetSoftwareUpdateFsuCycle#type}.

---

### FleetSoftwareUpdateFsuCycleTimeouts <a name="FleetSoftwareUpdateFsuCycleTimeouts" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleTimeouts;

FleetSoftwareUpdateFsuCycleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#create FleetSoftwareUpdateFsuCycle#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#delete FleetSoftwareUpdateFsuCycle#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#update FleetSoftwareUpdateFsuCycle#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#create FleetSoftwareUpdateFsuCycle#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#delete FleetSoftwareUpdateFsuCycle#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_software_update_fsu_cycle#update FleetSoftwareUpdateFsuCycle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference <a name="FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference;

new FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStartInput">timeToStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStart">timeToStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeToStartInput`<sup>Optional</sup> <a name="timeToStartInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStartInput"></a>

```java
public java.lang.String getTimeToStartInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStart"></a>

```java
public java.lang.String getTimeToStart();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.internalValue"></a>

```java
public FleetSoftwareUpdateFsuCycleApplyActionSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleApplyActionSchedule">FleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

---


### FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference <a name="FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference;

new FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetIsForceRolling">resetIsForceRolling</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetIsWaitForBatchResume">resetIsWaitForBatchResume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsForceRolling` <a name="resetIsForceRolling" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetIsForceRolling"></a>

```java
public void resetIsForceRolling()
```

##### `resetIsWaitForBatchResume` <a name="resetIsWaitForBatchResume" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetIsWaitForBatchResume"></a>

```java
public void resetIsWaitForBatchResume()
```

##### `resetPercentage` <a name="resetPercentage" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRollingInput">isForceRollingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResumeInput">isWaitForBatchResumeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRolling">isForceRolling</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResume">isWaitForBatchResume</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isForceRollingInput`<sup>Optional</sup> <a name="isForceRollingInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRollingInput"></a>

```java
public java.lang.Object getIsForceRollingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isWaitForBatchResumeInput`<sup>Optional</sup> <a name="isWaitForBatchResumeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResumeInput"></a>

```java
public java.lang.Object getIsWaitForBatchResumeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `isForceRolling`<sup>Required</sup> <a name="isForceRolling" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRolling"></a>

```java
public java.lang.Object getIsForceRolling();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isWaitForBatchResume`<sup>Required</sup> <a name="isWaitForBatchResume" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResume"></a>

```java
public java.lang.Object getIsWaitForBatchResume();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.internalValue"></a>

```java
public FleetSoftwareUpdateFsuCycleBatchingStrategy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleBatchingStrategy">FleetSoftwareUpdateFsuCycleBatchingStrategy</a>

---


### FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference <a name="FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference;

new FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resetLogCollectionMode">resetLogCollectionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogCollectionMode` <a name="resetLogCollectionMode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resetLogCollectionMode"></a>

```java
public void resetLogCollectionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionModeInput">logCollectionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionMode">logCollectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logCollectionModeInput`<sup>Optional</sup> <a name="logCollectionModeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionModeInput"></a>

```java
public java.lang.String getLogCollectionModeInput();
```

- *Type:* java.lang.String

---

##### `logCollectionMode`<sup>Required</sup> <a name="logCollectionMode" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionMode"></a>

```java
public java.lang.String getLogCollectionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.internalValue"></a>

```java
public FleetSoftwareUpdateFsuCycleDiagnosticsCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleDiagnosticsCollection">FleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

---


### FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference <a name="FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference;

new FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetHomePolicy">resetHomePolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetNewHomePrefix">resetNewHomePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetSoftwareImageId">resetSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHomePolicy` <a name="resetHomePolicy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetHomePolicy"></a>

```java
public void resetHomePolicy()
```

##### `resetNewHomePrefix` <a name="resetNewHomePrefix" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetNewHomePrefix"></a>

```java
public void resetNewHomePrefix()
```

##### `resetSoftwareImageId` <a name="resetSoftwareImageId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetSoftwareImageId"></a>

```java
public void resetSoftwareImageId()
```

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicyInput">homePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefixInput">newHomePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageIdInput">softwareImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicy">homePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefix">newHomePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageId">softwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `homePolicyInput`<sup>Optional</sup> <a name="homePolicyInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicyInput"></a>

```java
public java.lang.String getHomePolicyInput();
```

- *Type:* java.lang.String

---

##### `newHomePrefixInput`<sup>Optional</sup> <a name="newHomePrefixInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefixInput"></a>

```java
public java.lang.String getNewHomePrefixInput();
```

- *Type:* java.lang.String

---

##### `softwareImageIdInput`<sup>Optional</sup> <a name="softwareImageIdInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageIdInput"></a>

```java
public java.lang.String getSoftwareImageIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `homePolicy`<sup>Required</sup> <a name="homePolicy" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicy"></a>

```java
public java.lang.String getHomePolicy();
```

- *Type:* java.lang.String

---

##### `newHomePrefix`<sup>Required</sup> <a name="newHomePrefix" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefix"></a>

```java
public java.lang.String getNewHomePrefix();
```

- *Type:* java.lang.String

---

##### `softwareImageId`<sup>Required</sup> <a name="softwareImageId" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageId"></a>

```java
public java.lang.String getSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.internalValue"></a>

```java
public FleetSoftwareUpdateFsuCycleGoalVersionDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleGoalVersionDetails">FleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

---


### FleetSoftwareUpdateFsuCycleNextActionToExecuteList <a name="FleetSoftwareUpdateFsuCycleNextActionToExecuteList" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList;

new FleetSoftwareUpdateFsuCycleNextActionToExecuteList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.get"></a>

```java
public FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference <a name="FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference;

new FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.timeToStart">timeToStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecute">FleetSoftwareUpdateFsuCycleNextActionToExecute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.timeToStart"></a>

```java
public java.lang.String getTimeToStart();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.internalValue"></a>

```java
public FleetSoftwareUpdateFsuCycleNextActionToExecute getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleNextActionToExecute">FleetSoftwareUpdateFsuCycleNextActionToExecute</a>

---


### FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference <a name="FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference;

new FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStartInput">timeToStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStart">timeToStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeToStartInput`<sup>Optional</sup> <a name="timeToStartInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStartInput"></a>

```java
public java.lang.String getTimeToStartInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `timeToStart`<sup>Required</sup> <a name="timeToStart" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStart"></a>

```java
public java.lang.String getTimeToStart();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.internalValue"></a>

```java
public FleetSoftwareUpdateFsuCycleStageActionSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleStageActionSchedule">FleetSoftwareUpdateFsuCycleStageActionSchedule</a>

---


### FleetSoftwareUpdateFsuCycleTimeoutsOutputReference <a name="FleetSoftwareUpdateFsuCycleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_software_update_fsu_cycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference;

new FleetSoftwareUpdateFsuCycleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetSoftwareUpdateFsuCycle.FleetSoftwareUpdateFsuCycleTimeouts">FleetSoftwareUpdateFsuCycleTimeouts</a>

---



