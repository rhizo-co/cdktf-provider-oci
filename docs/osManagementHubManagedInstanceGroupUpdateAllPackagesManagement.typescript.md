# `osManagementHubManagedInstanceGroupUpdateAllPackagesManagement` Submodule <a name="`osManagementHubManagedInstanceGroupUpdateAllPackagesManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management oci_os_management_hub_managed_instance_group_update_all_packages_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement(scope: Construct, id: string, config: OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetUpdateTypes">resetUpdateTypes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putWorkRequestDetails"></a>

```typescript
public putWorkRequestDetails(value: OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateTypes` <a name="resetUpdateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetUpdateTypes"></a>

```typescript
public resetUpdateTypes(): void
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.resetWorkRequestDetails"></a>

```typescript
public resetWorkRequestDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isConstruct"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformElement"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformResource"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.updateTypesInput">updateTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.updateTypes">updateTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.managedInstanceGroupIdInput"></a>

```typescript
public readonly managedInstanceGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a>

---

##### `updateTypesInput`<sup>Optional</sup> <a name="updateTypesInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.updateTypesInput"></a>

```typescript
public readonly updateTypesInput: string[];
```

- *Type:* string[]

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.workRequestDetailsInput"></a>

```typescript
public readonly workRequestDetailsInput: OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

---

##### `updateTypes`<sup>Required</sup> <a name="updateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.updateTypes"></a>

```typescript
public readonly updateTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig: osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#managed_instance_group_id OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#id OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.updateTypes">updateTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#update_types OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#update_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.managedInstanceGroupId"></a>

```typescript
public readonly managedInstanceGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#managed_instance_group_id OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#managed_instance_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#id OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#timeouts OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#timeouts}

---

##### `updateTypes`<sup>Optional</sup> <a name="updateTypes" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.updateTypes"></a>

```typescript
public readonly updateTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#update_types OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#update_types}.

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementConfig.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#work_request_details OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#work_request_details}

---

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts: osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#create OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#delete OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#update OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#create OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#delete OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#update OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#update}.

---

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails: osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#description OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#display_name OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#description OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_managed_instance_group_update_all_packages_management#display_name OsManagementHubManagedInstanceGroupUpdateAllPackagesManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementTimeouts</a>

---


### OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference <a name="OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagedInstanceGroupUpdateAllPackagesManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagedInstanceGroupUpdateAllPackagesManagement.OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails">OsManagementHubManagedInstanceGroupUpdateAllPackagesManagementWorkRequestDetails</a>

---



