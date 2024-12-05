# `fleetAppsManagementFleetResource` Submodule <a name="`fleetAppsManagementFleetResource` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementFleetResource <a name="FleetAppsManagementFleetResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource oci_fleet_apps_management_fleet_resource}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_resource.FleetAppsManagementFleetResource;

FleetAppsManagementFleetResource.Builder.create(Construct scope, java.lang.String id)
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
    .fleetId(java.lang.String)
    .resourceId(java.lang.String)
    .tenancyId(java.lang.String)
//  .id(java.lang.String)
//  .resourceRegion(java.lang.String)
//  .resourceType(java.lang.String)
//  .timeouts(FleetAppsManagementFleetResourceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#compartment_id FleetAppsManagementFleetResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#fleet_id FleetAppsManagementFleetResource#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_id FleetAppsManagementFleetResource#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#tenancy_id FleetAppsManagementFleetResource#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#id FleetAppsManagementFleetResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_region FleetAppsManagementFleetResource#resource_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_type FleetAppsManagementFleetResource#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#compartment_id FleetAppsManagementFleetResource#compartment_id}.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.fleetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#fleet_id FleetAppsManagementFleetResource#fleet_id}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_id FleetAppsManagementFleetResource#resource_id}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.tenancyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#tenancy_id FleetAppsManagementFleetResource#tenancy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#id FleetAppsManagementFleetResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceRegion`<sup>Optional</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_region FleetAppsManagementFleetResource#resource_region}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_type FleetAppsManagementFleetResource#resource_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#timeouts FleetAppsManagementFleetResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetResourceRegion">resetResourceRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.putTimeouts"></a>

```java
public void putTimeouts(FleetAppsManagementFleetResourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetId"></a>

```java
public void resetId()
```

##### `resetResourceRegion` <a name="resetResourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetResourceRegion"></a>

```java
public void resetResourceRegion()
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementFleetResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_resource.FleetAppsManagementFleetResource;

FleetAppsManagementFleetResource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_resource.FleetAppsManagementFleetResource;

FleetAppsManagementFleetResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_resource.FleetAppsManagementFleetResource;

FleetAppsManagementFleetResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_resource.FleetAppsManagementFleetResource;

FleetAppsManagementFleetResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FleetAppsManagementFleetResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FleetAppsManagementFleetResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FleetAppsManagementFleetResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FleetAppsManagementFleetResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementFleetResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartment">compartment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.complianceState">complianceState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.productCount">productCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.targetCount">targetCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyName">tenancyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference">FleetAppsManagementFleetResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fleetIdInput">fleetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceRegionInput">resourceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyIdInput">tenancyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `compartment`<sup>Required</sup> <a name="compartment" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartment"></a>

```java
public java.lang.String getCompartment();
```

- *Type:* java.lang.String

---

##### `complianceState`<sup>Required</sup> <a name="complianceState" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.complianceState"></a>

```java
public java.lang.String getComplianceState();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `productCount`<sup>Required</sup> <a name="productCount" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.productCount"></a>

```java
public java.lang.Number getProductCount();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `targetCount`<sup>Required</sup> <a name="targetCount" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.targetCount"></a>

```java
public java.lang.Number getTargetCount();
```

- *Type:* java.lang.Number

---

##### `tenancyName`<sup>Required</sup> <a name="tenancyName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyName"></a>

```java
public java.lang.String getTenancyName();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeouts"></a>

```java
public FleetAppsManagementFleetResourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference">FleetAppsManagementFleetResourceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fleetIdInput"></a>

```java
public java.lang.String getFleetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourceRegionInput`<sup>Optional</sup> <a name="resourceRegionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceRegionInput"></a>

```java
public java.lang.String getResourceRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyIdInput"></a>

```java
public java.lang.String getTenancyIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceRegion"></a>

```java
public java.lang.String getResourceRegion();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementFleetResourceConfig <a name="FleetAppsManagementFleetResourceConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_resource.FleetAppsManagementFleetResourceConfig;

FleetAppsManagementFleetResourceConfig.builder()
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
    .fleetId(java.lang.String)
    .resourceId(java.lang.String)
    .tenancyId(java.lang.String)
//  .id(java.lang.String)
//  .resourceRegion(java.lang.String)
//  .resourceType(java.lang.String)
//  .timeouts(FleetAppsManagementFleetResourceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#compartment_id FleetAppsManagementFleetResource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#fleet_id FleetAppsManagementFleetResource#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_id FleetAppsManagementFleetResource#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#tenancy_id FleetAppsManagementFleetResource#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#id FleetAppsManagementFleetResource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceRegion">resourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_region FleetAppsManagementFleetResource#resource_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_type FleetAppsManagementFleetResource#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#compartment_id FleetAppsManagementFleetResource#compartment_id}.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#fleet_id FleetAppsManagementFleetResource#fleet_id}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_id FleetAppsManagementFleetResource#resource_id}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#tenancy_id FleetAppsManagementFleetResource#tenancy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#id FleetAppsManagementFleetResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceRegion`<sup>Optional</sup> <a name="resourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceRegion"></a>

```java
public java.lang.String getResourceRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_region FleetAppsManagementFleetResource#resource_region}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#resource_type FleetAppsManagementFleetResource#resource_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceConfig.property.timeouts"></a>

```java
public FleetAppsManagementFleetResourceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#timeouts FleetAppsManagementFleetResource#timeouts}

---

### FleetAppsManagementFleetResourceTimeouts <a name="FleetAppsManagementFleetResourceTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_resource.FleetAppsManagementFleetResourceTimeouts;

FleetAppsManagementFleetResourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#create FleetAppsManagementFleetResource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#delete FleetAppsManagementFleetResource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#update FleetAppsManagementFleetResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#create FleetAppsManagementFleetResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#delete FleetAppsManagementFleetResource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet_resource#update FleetAppsManagementFleetResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementFleetResourceTimeoutsOutputReference <a name="FleetAppsManagementFleetResourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.fleet_apps_management_fleet_resource.FleetAppsManagementFleetResourceTimeoutsOutputReference;

new FleetAppsManagementFleetResourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleetResource.FleetAppsManagementFleetResourceTimeouts">FleetAppsManagementFleetResourceTimeouts</a>

---



