# `osManagementHubManagedInstanceInstallWindowsUpdatesManagement` Submodule <a name="`osManagementHubManagedInstanceInstallWindowsUpdatesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagement <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management oci_os_management_hub_managed_instance_install_windows_updates_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement(scope: Construct, id: string, config: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateName">resetWindowsUpdateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateTypes">resetWindowsUpdateTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putWorkRequestDetails"></a>

```typescript
public putWorkRequestDetails(value: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWindowsUpdateName` <a name="resetWindowsUpdateName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateName"></a>

```typescript
public resetWindowsUpdateName(): void
```

##### `resetWindowsUpdateTypes` <a name="resetWindowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWindowsUpdateTypes"></a>

```typescript
public resetWindowsUpdateTypes(): void
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.resetWorkRequestDetails"></a>

```typescript
public resetWorkRequestDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceInstallWindowsUpdatesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceInstallWindowsUpdatesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceInstallWindowsUpdatesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceInstallWindowsUpdatesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateNameInput">windowsUpdateNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput">windowsUpdateTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateName">windowsUpdateName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypes">windowsUpdateTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a>

---

##### `windowsUpdateNameInput`<sup>Optional</sup> <a name="windowsUpdateNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateNameInput"></a>

```typescript
public readonly windowsUpdateNameInput: string[];
```

- *Type:* string[]

---

##### `windowsUpdateTypesInput`<sup>Optional</sup> <a name="windowsUpdateTypesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypesInput"></a>

```typescript
public readonly windowsUpdateTypesInput: string[];
```

- *Type:* string[]

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.workRequestDetailsInput"></a>

```typescript
public readonly workRequestDetailsInput: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `windowsUpdateName`<sup>Required</sup> <a name="windowsUpdateName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateName"></a>

```typescript
public readonly windowsUpdateName: string[];
```

- *Type:* string[]

---

##### `windowsUpdateTypes`<sup>Required</sup> <a name="windowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.windowsUpdateTypes"></a>

```typescript
public readonly windowsUpdateTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig: osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#managed_instance_id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateName">windowsUpdateName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes">windowsUpdateTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#managed_instance_id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#id OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#timeouts OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#timeouts}

---

##### `windowsUpdateName`<sup>Optional</sup> <a name="windowsUpdateName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateName"></a>

```typescript
public readonly windowsUpdateName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_name}.

---

##### `windowsUpdateTypes`<sup>Optional</sup> <a name="windowsUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.windowsUpdateTypes"></a>

```typescript
public readonly windowsUpdateTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#windows_update_types OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#windows_update_types}.

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementConfig.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#work_request_details OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#work_request_details}

---

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts: osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#create OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#delete OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#update OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#create OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#delete OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#update OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#update}.

---

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails: osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#description OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#display_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#description OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_install_windows_updates_management#display_name OsManagementHubManagedInstanceInstallWindowsUpdatesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementTimeouts</a>

---


### OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceInstallWindowsUpdatesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceInstallWindowsUpdatesManagement.OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails">OsManagementHubManagedInstanceInstallWindowsUpdatesManagementWorkRequestDetails</a>

---



