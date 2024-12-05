# `fleetAppsManagementFleet` Submodule <a name="`fleetAppsManagementFleet` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementFleet <a name="FleetAppsManagementFleet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet oci_fleet_apps_management_fleet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleet;

FleetAppsManagementFleet.Builder.create(Construct scope, java.lang.String id)
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
    .fleetType(java.lang.String)
//  .applicationType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .environmentType(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .groupType(java.lang.String)
//  .id(java.lang.String)
//  .isTargetAutoConfirm(java.lang.Boolean)
//  .isTargetAutoConfirm(IResolvable)
//  .notificationPreferences(FleetAppsManagementFleetNotificationPreferences)
//  .products(java.util.List<java.lang.String>)
//  .resourceSelectionType(java.lang.String)
//  .ruleSelectionCriteria(FleetAppsManagementFleetRuleSelectionCriteria)
//  .timeouts(FleetAppsManagementFleetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.fleetType">fleetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.applicationType">applicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#application_type FleetAppsManagementFleet#application_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.environmentType">environmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.groupType">groupType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#group_type FleetAppsManagementFleet#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.isTargetAutoConfirm">isTargetAutoConfirm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.notificationPreferences">notificationPreferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | notification_preferences block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.products">products</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.resourceSelectionType">resourceSelectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.ruleSelectionCriteria">ruleSelectionCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | rule_selection_criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.fleetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}.

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.applicationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#application_type FleetAppsManagementFleet#application_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.environmentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}.

---

##### `groupType`<sup>Optional</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.groupType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#group_type FleetAppsManagementFleet#group_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTargetAutoConfirm`<sup>Optional</sup> <a name="isTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.isTargetAutoConfirm"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}.

---

##### `notificationPreferences`<sup>Optional</sup> <a name="notificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.notificationPreferences"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

notification_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#notification_preferences FleetAppsManagementFleet#notification_preferences}

---

##### `products`<sup>Optional</sup> <a name="products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.products"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}.

---

##### `resourceSelectionType`<sup>Optional</sup> <a name="resourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.resourceSelectionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}.

---

##### `ruleSelectionCriteria`<sup>Optional</sup> <a name="ruleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.ruleSelectionCriteria"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

rule_selection_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#rule_selection_criteria FleetAppsManagementFleet#rule_selection_criteria}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#timeouts FleetAppsManagementFleet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putNotificationPreferences">putNotificationPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putRuleSelectionCriteria">putRuleSelectionCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetEnvironmentType">resetEnvironmentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetGroupType">resetGroupType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetIsTargetAutoConfirm">resetIsTargetAutoConfirm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetNotificationPreferences">resetNotificationPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetProducts">resetProducts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetResourceSelectionType">resetResourceSelectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetRuleSelectionCriteria">resetRuleSelectionCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationPreferences` <a name="putNotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putNotificationPreferences"></a>

```java
public void putNotificationPreferences(FleetAppsManagementFleetNotificationPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putNotificationPreferences.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

---

##### `putRuleSelectionCriteria` <a name="putRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putRuleSelectionCriteria"></a>

```java
public void putRuleSelectionCriteria(FleetAppsManagementFleetRuleSelectionCriteria value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putRuleSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putTimeouts"></a>

```java
public void putTimeouts(FleetAppsManagementFleetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

---

##### `resetApplicationType` <a name="resetApplicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetApplicationType"></a>

```java
public void resetApplicationType()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnvironmentType` <a name="resetEnvironmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetEnvironmentType"></a>

```java
public void resetEnvironmentType()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetGroupType` <a name="resetGroupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetGroupType"></a>

```java
public void resetGroupType()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetId"></a>

```java
public void resetId()
```

##### `resetIsTargetAutoConfirm` <a name="resetIsTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetIsTargetAutoConfirm"></a>

```java
public void resetIsTargetAutoConfirm()
```

##### `resetNotificationPreferences` <a name="resetNotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetNotificationPreferences"></a>

```java
public void resetNotificationPreferences()
```

##### `resetProducts` <a name="resetProducts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetProducts"></a>

```java
public void resetProducts()
```

##### `resetResourceSelectionType` <a name="resetResourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetResourceSelectionType"></a>

```java
public void resetResourceSelectionType()
```

##### `resetRuleSelectionCriteria` <a name="resetRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetRuleSelectionCriteria"></a>

```java
public void resetRuleSelectionCriteria()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementFleet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleet;

FleetAppsManagementFleet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleet;

FleetAppsManagementFleet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleet;

FleetAppsManagementFleet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleet;

FleetAppsManagementFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FleetAppsManagementFleet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FleetAppsManagementFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FleetAppsManagementFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FleetAppsManagementFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferences">notificationPreferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteria">ruleSelectionCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference">FleetAppsManagementFleetRuleSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference">FleetAppsManagementFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationTypeInput">applicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentTypeInput">environmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetTypeInput">fleetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupTypeInput">groupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirmInput">isTargetAutoConfirmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferencesInput">notificationPreferencesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.productsInput">productsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionTypeInput">resourceSelectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteriaInput">ruleSelectionCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetType">fleetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupType">groupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirm">isTargetAutoConfirm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionType">resourceSelectionType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `notificationPreferences`<sup>Required</sup> <a name="notificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferences"></a>

```java
public FleetAppsManagementFleetNotificationPreferencesOutputReference getNotificationPreferences();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesOutputReference</a>

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceRegion"></a>

```java
public java.lang.String getResourceRegion();
```

- *Type:* java.lang.String

---

##### `ruleSelectionCriteria`<sup>Required</sup> <a name="ruleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteria"></a>

```java
public FleetAppsManagementFleetRuleSelectionCriteriaOutputReference getRuleSelectionCriteria();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference">FleetAppsManagementFleetRuleSelectionCriteriaOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeouts"></a>

```java
public FleetAppsManagementFleetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference">FleetAppsManagementFleetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationTypeInput"></a>

```java
public java.lang.String getApplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentTypeInput"></a>

```java
public java.lang.String getEnvironmentTypeInput();
```

- *Type:* java.lang.String

---

##### `fleetTypeInput`<sup>Optional</sup> <a name="fleetTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetTypeInput"></a>

```java
public java.lang.String getFleetTypeInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `groupTypeInput`<sup>Optional</sup> <a name="groupTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupTypeInput"></a>

```java
public java.lang.String getGroupTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isTargetAutoConfirmInput`<sup>Optional</sup> <a name="isTargetAutoConfirmInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirmInput"></a>

```java
public java.lang.Object getIsTargetAutoConfirmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notificationPreferencesInput`<sup>Optional</sup> <a name="notificationPreferencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferencesInput"></a>

```java
public FleetAppsManagementFleetNotificationPreferences getNotificationPreferencesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

---

##### `productsInput`<sup>Optional</sup> <a name="productsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.productsInput"></a>

```java
public java.util.List<java.lang.String> getProductsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceSelectionTypeInput`<sup>Optional</sup> <a name="resourceSelectionTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionTypeInput"></a>

```java
public java.lang.String getResourceSelectionTypeInput();
```

- *Type:* java.lang.String

---

##### `ruleSelectionCriteriaInput`<sup>Optional</sup> <a name="ruleSelectionCriteriaInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteriaInput"></a>

```java
public FleetAppsManagementFleetRuleSelectionCriteria getRuleSelectionCriteriaInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetType"></a>

```java
public java.lang.String getFleetType();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `groupType`<sup>Required</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupType"></a>

```java
public java.lang.String getGroupType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isTargetAutoConfirm`<sup>Required</sup> <a name="isTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirm"></a>

```java
public java.lang.Object getIsTargetAutoConfirm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceSelectionType`<sup>Required</sup> <a name="resourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionType"></a>

```java
public java.lang.String getResourceSelectionType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementFleetConfig <a name="FleetAppsManagementFleetConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetConfig;

FleetAppsManagementFleetConfig.builder()
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
    .fleetType(java.lang.String)
//  .applicationType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .environmentType(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .groupType(java.lang.String)
//  .id(java.lang.String)
//  .isTargetAutoConfirm(java.lang.Boolean)
//  .isTargetAutoConfirm(IResolvable)
//  .notificationPreferences(FleetAppsManagementFleetNotificationPreferences)
//  .products(java.util.List<java.lang.String>)
//  .resourceSelectionType(java.lang.String)
//  .ruleSelectionCriteria(FleetAppsManagementFleetRuleSelectionCriteria)
//  .timeouts(FleetAppsManagementFleetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.fleetType">fleetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#application_type FleetAppsManagementFleet#application_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.groupType">groupType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#group_type FleetAppsManagementFleet#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.isTargetAutoConfirm">isTargetAutoConfirm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.notificationPreferences">notificationPreferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | notification_preferences block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.resourceSelectionType">resourceSelectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.ruleSelectionCriteria">ruleSelectionCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | rule_selection_criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `fleetType`<sup>Required</sup> <a name="fleetType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.fleetType"></a>

```java
public java.lang.String getFleetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}.

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#application_type FleetAppsManagementFleet#application_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}.

---

##### `groupType`<sup>Optional</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.groupType"></a>

```java
public java.lang.String getGroupType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#group_type FleetAppsManagementFleet#group_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isTargetAutoConfirm`<sup>Optional</sup> <a name="isTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.isTargetAutoConfirm"></a>

```java
public java.lang.Object getIsTargetAutoConfirm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}.

---

##### `notificationPreferences`<sup>Optional</sup> <a name="notificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.notificationPreferences"></a>

```java
public FleetAppsManagementFleetNotificationPreferences getNotificationPreferences();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

notification_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#notification_preferences FleetAppsManagementFleet#notification_preferences}

---

##### `products`<sup>Optional</sup> <a name="products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}.

---

##### `resourceSelectionType`<sup>Optional</sup> <a name="resourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.resourceSelectionType"></a>

```java
public java.lang.String getResourceSelectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}.

---

##### `ruleSelectionCriteria`<sup>Optional</sup> <a name="ruleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.ruleSelectionCriteria"></a>

```java
public FleetAppsManagementFleetRuleSelectionCriteria getRuleSelectionCriteria();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

rule_selection_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#rule_selection_criteria FleetAppsManagementFleet#rule_selection_criteria}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.timeouts"></a>

```java
public FleetAppsManagementFleetTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#timeouts FleetAppsManagementFleet#timeouts}

---

### FleetAppsManagementFleetNotificationPreferences <a name="FleetAppsManagementFleetNotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetNotificationPreferences;

FleetAppsManagementFleetNotificationPreferences.builder()
    .compartmentId(java.lang.String)
    .topicId(java.lang.String)
//  .preferences(FleetAppsManagementFleetNotificationPreferencesPreferences)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.topicId">topicId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#topic_id FleetAppsManagementFleet#topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.preferences">preferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | preferences block. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#topic_id FleetAppsManagementFleet#topic_id}.

---

##### `preferences`<sup>Optional</sup> <a name="preferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.preferences"></a>

```java
public FleetAppsManagementFleetNotificationPreferencesPreferences getPreferences();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#preferences FleetAppsManagementFleet#preferences}

---

### FleetAppsManagementFleetNotificationPreferencesPreferences <a name="FleetAppsManagementFleetNotificationPreferencesPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetNotificationPreferencesPreferences;

FleetAppsManagementFleetNotificationPreferencesPreferences.builder()
//  .onJobFailure(java.lang.Boolean)
//  .onJobFailure(IResolvable)
//  .onTopologyModification(java.lang.Boolean)
//  .onTopologyModification(IResolvable)
//  .onUpcomingSchedule(java.lang.Boolean)
//  .onUpcomingSchedule(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onJobFailure">onJobFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_job_failure FleetAppsManagementFleet#on_job_failure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onTopologyModification">onTopologyModification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_topology_modification FleetAppsManagementFleet#on_topology_modification}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onUpcomingSchedule">onUpcomingSchedule</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_upcoming_schedule FleetAppsManagementFleet#on_upcoming_schedule}. |

---

##### `onJobFailure`<sup>Optional</sup> <a name="onJobFailure" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onJobFailure"></a>

```java
public java.lang.Object getOnJobFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_job_failure FleetAppsManagementFleet#on_job_failure}.

---

##### `onTopologyModification`<sup>Optional</sup> <a name="onTopologyModification" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onTopologyModification"></a>

```java
public java.lang.Object getOnTopologyModification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_topology_modification FleetAppsManagementFleet#on_topology_modification}.

---

##### `onUpcomingSchedule`<sup>Optional</sup> <a name="onUpcomingSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onUpcomingSchedule"></a>

```java
public java.lang.Object getOnUpcomingSchedule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_upcoming_schedule FleetAppsManagementFleet#on_upcoming_schedule}.

---

### FleetAppsManagementFleetRuleSelectionCriteria <a name="FleetAppsManagementFleetRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetRuleSelectionCriteria;

FleetAppsManagementFleetRuleSelectionCriteria.builder()
    .matchCondition(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<FleetAppsManagementFleetRuleSelectionCriteriaRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.matchCondition">matchCondition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#match_condition FleetAppsManagementFleet#match_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>></code> | rules block. |

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.matchCondition"></a>

```java
public java.lang.String getMatchCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#match_condition FleetAppsManagementFleet#match_condition}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#rules FleetAppsManagementFleet#rules}

---

### FleetAppsManagementFleetRuleSelectionCriteriaRules <a name="FleetAppsManagementFleetRuleSelectionCriteriaRules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetRuleSelectionCriteriaRules;

FleetAppsManagementFleetRuleSelectionCriteriaRules.builder()
    .compartmentId(java.lang.String)
    .conditions(IResolvable)
    .conditions(java.util.List<FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions>)
    .resourceCompartmentId(java.lang.String)
//  .basis(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>></code> | conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_compartment_id FleetAppsManagementFleet#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.basis">basis</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#basis FleetAppsManagementFleet#basis}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.conditions"></a>

```java
public java.lang.Object getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#conditions FleetAppsManagementFleet#conditions}

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.resourceCompartmentId"></a>

```java
public java.lang.String getResourceCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_compartment_id FleetAppsManagementFleet#resource_compartment_id}.

---

##### `basis`<sup>Optional</sup> <a name="basis" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.basis"></a>

```java
public java.lang.String getBasis();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#basis FleetAppsManagementFleet#basis}.

---

### FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions;

FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.builder()
    .attrGroup(java.lang.String)
    .attrKey(java.lang.String)
    .attrValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrGroup">attrGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_group FleetAppsManagementFleet#attr_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrKey">attrKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_key FleetAppsManagementFleet#attr_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrValue">attrValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_value FleetAppsManagementFleet#attr_value}. |

---

##### `attrGroup`<sup>Required</sup> <a name="attrGroup" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrGroup"></a>

```java
public java.lang.String getAttrGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_group FleetAppsManagementFleet#attr_group}.

---

##### `attrKey`<sup>Required</sup> <a name="attrKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrKey"></a>

```java
public java.lang.String getAttrKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_key FleetAppsManagementFleet#attr_key}.

---

##### `attrValue`<sup>Required</sup> <a name="attrValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrValue"></a>

```java
public java.lang.String getAttrValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_value FleetAppsManagementFleet#attr_value}.

---

### FleetAppsManagementFleetTimeouts <a name="FleetAppsManagementFleetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetTimeouts;

FleetAppsManagementFleetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#create FleetAppsManagementFleet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#delete FleetAppsManagementFleet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#update FleetAppsManagementFleet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#create FleetAppsManagementFleet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#delete FleetAppsManagementFleet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#update FleetAppsManagementFleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementFleetNotificationPreferencesOutputReference <a name="FleetAppsManagementFleetNotificationPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetNotificationPreferencesOutputReference;

new FleetAppsManagementFleetNotificationPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.putPreferences">putPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resetPreferences">resetPreferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreferences` <a name="putPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.putPreferences"></a>

```java
public void putPreferences(FleetAppsManagementFleetNotificationPreferencesPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.putPreferences.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

---

##### `resetPreferences` <a name="resetPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resetPreferences"></a>

```java
public void resetPreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferences">preferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferencesInput">preferencesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicIdInput">topicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicId">topicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preferences`<sup>Required</sup> <a name="preferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferences"></a>

```java
public FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference getPreferences();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `preferencesInput`<sup>Optional</sup> <a name="preferencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferencesInput"></a>

```java
public FleetAppsManagementFleetNotificationPreferencesPreferences getPreferencesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicIdInput"></a>

```java
public java.lang.String getTopicIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.internalValue"></a>

```java
public FleetAppsManagementFleetNotificationPreferences getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

---


### FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference <a name="FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference;

new FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnJobFailure">resetOnJobFailure</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnTopologyModification">resetOnTopologyModification</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnUpcomingSchedule">resetOnUpcomingSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnJobFailure` <a name="resetOnJobFailure" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnJobFailure"></a>

```java
public void resetOnJobFailure()
```

##### `resetOnTopologyModification` <a name="resetOnTopologyModification" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnTopologyModification"></a>

```java
public void resetOnTopologyModification()
```

##### `resetOnUpcomingSchedule` <a name="resetOnUpcomingSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnUpcomingSchedule"></a>

```java
public void resetOnUpcomingSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailureInput">onJobFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModificationInput">onTopologyModificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingScheduleInput">onUpcomingScheduleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailure">onJobFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModification">onTopologyModification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule">onUpcomingSchedule</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onJobFailureInput`<sup>Optional</sup> <a name="onJobFailureInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailureInput"></a>

```java
public java.lang.Object getOnJobFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onTopologyModificationInput`<sup>Optional</sup> <a name="onTopologyModificationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModificationInput"></a>

```java
public java.lang.Object getOnTopologyModificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onUpcomingScheduleInput`<sup>Optional</sup> <a name="onUpcomingScheduleInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingScheduleInput"></a>

```java
public java.lang.Object getOnUpcomingScheduleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onJobFailure`<sup>Required</sup> <a name="onJobFailure" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailure"></a>

```java
public java.lang.Object getOnJobFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onTopologyModification`<sup>Required</sup> <a name="onTopologyModification" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModification"></a>

```java
public java.lang.Object getOnTopologyModification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `onUpcomingSchedule`<sup>Required</sup> <a name="onUpcomingSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule"></a>

```java
public java.lang.Object getOnUpcomingSchedule();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.internalValue"></a>

```java
public FleetAppsManagementFleetNotificationPreferencesPreferences getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

---


### FleetAppsManagementFleetRuleSelectionCriteriaOutputReference <a name="FleetAppsManagementFleetRuleSelectionCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference;

new FleetAppsManagementFleetRuleSelectionCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<FleetAppsManagementFleetRuleSelectionCriteriaRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList">FleetAppsManagementFleetRuleSelectionCriteriaRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchCondition">matchCondition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rules"></a>

```java
public FleetAppsManagementFleetRuleSelectionCriteriaRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList">FleetAppsManagementFleetRuleSelectionCriteriaRulesList</a>

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchConditionInput"></a>

```java
public java.lang.String getMatchConditionInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>>

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchCondition"></a>

```java
public java.lang.String getMatchCondition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.internalValue"></a>

```java
public FleetAppsManagementFleetRuleSelectionCriteria getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList;

new FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get"></a>

```java
public FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>>

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference;

new FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroupInput">attrGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKeyInput">attrKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValueInput">attrValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup">attrGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey">attrKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue">attrValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attrGroupInput`<sup>Optional</sup> <a name="attrGroupInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroupInput"></a>

```java
public java.lang.String getAttrGroupInput();
```

- *Type:* java.lang.String

---

##### `attrKeyInput`<sup>Optional</sup> <a name="attrKeyInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKeyInput"></a>

```java
public java.lang.String getAttrKeyInput();
```

- *Type:* java.lang.String

---

##### `attrValueInput`<sup>Optional</sup> <a name="attrValueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValueInput"></a>

```java
public java.lang.String getAttrValueInput();
```

- *Type:* java.lang.String

---

##### `attrGroup`<sup>Required</sup> <a name="attrGroup" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup"></a>

```java
public java.lang.String getAttrGroup();
```

- *Type:* java.lang.String

---

##### `attrKey`<sup>Required</sup> <a name="attrKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey"></a>

```java
public java.lang.String getAttrKey();
```

- *Type:* java.lang.String

---

##### `attrValue`<sup>Required</sup> <a name="attrValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue"></a>

```java
public java.lang.String getAttrValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesList <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList;

new FleetAppsManagementFleetRuleSelectionCriteriaRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.get"></a>

```java
public FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>>

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference;

new FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resetBasis">resetBasis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.putConditions"></a>

```java
public void putConditions(IResolvable OR java.util.List<FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>>

---

##### `resetBasis` <a name="resetBasis" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resetBasis"></a>

```java
public void resetBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basisInput">basisInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentIdInput">resourceCompartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basis">basis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditions"></a>

```java
public FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList getConditions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList</a>

---

##### `basisInput`<sup>Optional</sup> <a name="basisInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basisInput"></a>

```java
public java.lang.String getBasisInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditionsInput"></a>

```java
public java.lang.Object getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions</a>>

---

##### `resourceCompartmentIdInput`<sup>Optional</sup> <a name="resourceCompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentIdInput"></a>

```java
public java.lang.String getResourceCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `basis`<sup>Required</sup> <a name="basis" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basis"></a>

```java
public java.lang.String getBasis();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId"></a>

```java
public java.lang.String getResourceCompartmentId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules">FleetAppsManagementFleetRuleSelectionCriteriaRules</a>

---


### FleetAppsManagementFleetTimeoutsOutputReference <a name="FleetAppsManagementFleetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet.FleetAppsManagementFleetTimeoutsOutputReference;

new FleetAppsManagementFleetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

---



