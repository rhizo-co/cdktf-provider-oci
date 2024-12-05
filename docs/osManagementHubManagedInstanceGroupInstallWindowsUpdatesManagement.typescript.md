# `osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management oci_os_management_hub_managed_instance_group_install_windows_updates_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement(scope: Construct, id: string, config: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails"></a>

```typescript
public putWorkRequestDetails(value: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.resetWorkRequestDetails"></a>

```typescript
public resetWorkRequestDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput">windowsUpdateTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypes">windowsUpdateTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

---

##### `windowsUpdateTypesInput`<sup>Optional</sup> <a name="windowsUpdateTypesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput"></a>

```typescript
public readonly windowsUpdateTypesInput: string[];
```

- *Type:* string[]

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.workRequestDetailsInput"></a>

```typescript
public readonly workRequestDetailsInput: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

##### `windowsUpdateTypes`<sup>Required</sup> <a name="windowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.windowsUpdateTypes"></a>

```typescript
public readonly windowsUpdateTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig: osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes">windowsUpdateTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#managed_instance_group_id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#managed_instance_group_id}.

---

##### `windowsUpdateTypes`<sup>Required</sup> <a name="windowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes"></a>

```typescript
public readonly windowsUpdateTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#windows_update_types}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#id OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#timeouts OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementConfig.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#work_request_details OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts: osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#create OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#delete OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#update OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#create OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#delete OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#update OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#update}.

---

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails: osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#description OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#display_name OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#description OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_install_windows_updates_management#display_name OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementTimeouts</a>

---


### OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupInstallWindowsUpdatesManagementWorkRequestDetails</a>

---



