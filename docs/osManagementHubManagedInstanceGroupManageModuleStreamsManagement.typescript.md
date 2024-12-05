# `osManagementHubManagedInstanceGroupManageModuleStreamsManagement` Submodule <a name="`osManagementHubManagedInstanceGroupManageModuleStreamsManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagement <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management oci_os_management_hub_managed_instance_group_manage_module_streams_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement(scope: Construct, id: string, config: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putDisable">putDisable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putEnable">putEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putInstall">putInstall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putRemove">putRemove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetInstall">resetInstall</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetIsDryRun">resetIsDryRun</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDisable` <a name="putDisable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putDisable"></a>

```typescript
public putDisable(value: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putDisable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable</a>[]

---

##### `putEnable` <a name="putEnable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putEnable"></a>

```typescript
public putEnable(value: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putEnable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable</a>[]

---

##### `putInstall` <a name="putInstall" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putInstall"></a>

```typescript
public putInstall(value: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putInstall.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall</a>[]

---

##### `putRemove` <a name="putRemove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putRemove"></a>

```typescript
public putRemove(value: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putRemove.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putWorkRequestDetails"></a>

```typescript
public putWorkRequestDetails(value: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

---

##### `resetDisable` <a name="resetDisable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetDisable"></a>

```typescript
public resetDisable(): void
```

##### `resetEnable` <a name="resetEnable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstall` <a name="resetInstall" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetInstall"></a>

```typescript
public resetInstall(): void
```

##### `resetIsDryRun` <a name="resetIsDryRun" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetIsDryRun"></a>

```typescript
public resetIsDryRun(): void
```

##### `resetRemove` <a name="resetRemove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetRemove"></a>

```typescript
public resetRemove(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.resetWorkRequestDetails"></a>

```typescript
public resetWorkRequestDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupManageModuleStreamsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupManageModuleStreamsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupManageModuleStreamsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupManageModuleStreamsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupManageModuleStreamsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disable">disable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enable">enable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.install">install</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.remove">remove</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disableInput">disableInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enableInput">enableInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.installInput">installInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRunInput">isDryRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.removeInput">removeInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRun">isDryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `disable`<sup>Required</sup> <a name="disable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disable"></a>

```typescript
public readonly disable: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList</a>

---

##### `enable`<sup>Required</sup> <a name="enable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enable"></a>

```typescript
public readonly enable: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList</a>

---

##### `install`<sup>Required</sup> <a name="install" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.install"></a>

```typescript
public readonly install: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList</a>

---

##### `remove`<sup>Required</sup> <a name="remove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.remove"></a>

```typescript
public readonly remove: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference</a>

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.disableInput"></a>

```typescript
public readonly disableInput: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable</a>[]

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.enableInput"></a>

```typescript
public readonly enableInput: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installInput`<sup>Optional</sup> <a name="installInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.installInput"></a>

```typescript
public readonly installInput: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall</a>[]

---

##### `isDryRunInput`<sup>Optional</sup> <a name="isDryRunInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRunInput"></a>

```typescript
public readonly isDryRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.removeInput"></a>

```typescript
public readonly removeInput: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a>

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.workRequestDetailsInput"></a>

```typescript
public readonly workRequestDetailsInput: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDryRun`<sup>Required</sup> <a name="isDryRun" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.isDryRun"></a>

```typescript
public readonly isDryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig: osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#managed_instance_group_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.disable">disable</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable</a>[]</code> | disable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.enable">enable</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable</a>[]</code> | enable block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.install">install</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall</a>[]</code> | install block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.isDryRun">isDryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#is_dry_run OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#is_dry_run}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.remove">remove</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove</a>[]</code> | remove block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#managed_instance_group_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#managed_instance_group_id}.

---

##### `disable`<sup>Optional</sup> <a name="disable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.disable"></a>

```typescript
public readonly disable: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable</a>[]

disable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#disable OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#disable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.enable"></a>

```typescript
public readonly enable: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable</a>[]

enable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#enable OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#enable}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `install`<sup>Optional</sup> <a name="install" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.install"></a>

```typescript
public readonly install: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall</a>[]

install block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#install OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#install}

---

##### `isDryRun`<sup>Optional</sup> <a name="isDryRun" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.isDryRun"></a>

```typescript
public readonly isDryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#is_dry_run OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#is_dry_run}.

---

##### `remove`<sup>Optional</sup> <a name="remove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.remove"></a>

```typescript
public readonly remove: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove</a>[]

remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#remove OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#remove}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#timeouts OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementConfig.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#work_request_details OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable: osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable: osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall: osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove: osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.moduleName">moduleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}. |

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#module_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#module_name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#profile_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#profile_name}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#stream_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#stream_name}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#software_source_id OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#software_source_id}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts: osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#create OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#delete OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#update OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#create OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#delete OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#update OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#update}.

---

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails: osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#description OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#display_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#description OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_manage_module_streams_management#display_name OsManagementHubManagedInstanceGroupManageModuleStreamsManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.get"></a>

```typescript
public get(index: number): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable</a>[]

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementDisable</a>

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.get"></a>

```typescript
public get(index: number): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable</a>[]

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementEnable</a>

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.get"></a>

```typescript
public get(index: number): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall</a>[]

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementInstall</a>

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.get"></a>

```typescript
public get(index: number): OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove</a>[]

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleNameInput">moduleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleName">moduleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `moduleNameInput`<sup>Optional</sup> <a name="moduleNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleNameInput"></a>

```typescript
public readonly moduleNameInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemoveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementRemove</a>

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementTimeouts</a>

---


### OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupManageModuleStreamsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupManageModuleStreamsManagement.OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupManageModuleStreamsManagementWorkRequestDetails</a>

---



