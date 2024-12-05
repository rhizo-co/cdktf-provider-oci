# `osmanagementManagedInstanceManagement` Submodule <a name="`osmanagementManagedInstanceManagement` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementManagedInstanceManagement <a name="OsmanagementManagedInstanceManagement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management oci_osmanagement_managed_instance_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

new osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement(scope: Construct, id: string, config: OsmanagementManagedInstanceManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig">OsmanagementManagedInstanceManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig">OsmanagementManagedInstanceManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources">putChildSoftwareSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups">putManagedInstanceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource">putParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetChildSoftwareSources">resetChildSoftwareSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetManagedInstanceGroups">resetManagedInstanceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetParentSoftwareSource">resetParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChildSoftwareSources` <a name="putChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources"></a>

```typescript
public putChildSoftwareSources(value: IResolvable | OsmanagementManagedInstanceManagementChildSoftwareSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>[]

---

##### `putManagedInstanceGroups` <a name="putManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups"></a>

```typescript
public putManagedInstanceGroups(value: IResolvable | OsmanagementManagedInstanceManagementManagedInstanceGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>[]

---

##### `putParentSoftwareSource` <a name="putParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource"></a>

```typescript
public putParentSoftwareSource(value: OsmanagementManagedInstanceManagementParentSoftwareSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsmanagementManagedInstanceManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

---

##### `resetChildSoftwareSources` <a name="resetChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetChildSoftwareSources"></a>

```typescript
public resetChildSoftwareSources(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedInstanceGroups` <a name="resetManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetManagedInstanceGroups"></a>

```typescript
public resetManagedInstanceGroups(): void
```

##### `resetParentSoftwareSource` <a name="resetParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetParentSoftwareSource"></a>

```typescript
public resetParentSoftwareSource(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsmanagementManagedInstanceManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsmanagementManagedInstanceManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsmanagementManagedInstanceManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsmanagementManagedInstanceManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementManagedInstanceManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSources">childSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList">OsmanagementManagedInstanceManagementChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastBoot">lastBoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastCheckin">lastCheckin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroups">managedInstanceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList">OsmanagementManagedInstanceManagementManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osKernelVersion">osKernelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osName">osName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSource">parentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference">OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference">OsmanagementManagedInstanceManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.updatesAvailable">updatesAvailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSourcesInput">childSoftwareSourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroupsInput">managedInstanceGroupsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSourceInput">parentSoftwareSourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `childSoftwareSources`<sup>Required</sup> <a name="childSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSources"></a>

```typescript
public readonly childSoftwareSources: OsmanagementManagedInstanceManagementChildSoftwareSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList">OsmanagementManagedInstanceManagementChildSoftwareSourcesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lastBoot`<sup>Required</sup> <a name="lastBoot" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastBoot"></a>

```typescript
public readonly lastBoot: string;
```

- *Type:* string

---

##### `lastCheckin`<sup>Required</sup> <a name="lastCheckin" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastCheckin"></a>

```typescript
public readonly lastCheckin: string;
```

- *Type:* string

---

##### `managedInstanceGroups`<sup>Required</sup> <a name="managedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroups"></a>

```typescript
public readonly managedInstanceGroups: OsmanagementManagedInstanceManagementManagedInstanceGroupsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList">OsmanagementManagedInstanceManagementManagedInstanceGroupsList</a>

---

##### `osKernelVersion`<sup>Required</sup> <a name="osKernelVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osKernelVersion"></a>

```typescript
public readonly osKernelVersion: string;
```

- *Type:* string

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osName"></a>

```typescript
public readonly osName: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

##### `parentSoftwareSource`<sup>Required</sup> <a name="parentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSource"></a>

```typescript
public readonly parentSoftwareSource: OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference">OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsmanagementManagedInstanceManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference">OsmanagementManagedInstanceManagementTimeoutsOutputReference</a>

---

##### `updatesAvailable`<sup>Required</sup> <a name="updatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.updatesAvailable"></a>

```typescript
public readonly updatesAvailable: number;
```

- *Type:* number

---

##### `childSoftwareSourcesInput`<sup>Optional</sup> <a name="childSoftwareSourcesInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSourcesInput"></a>

```typescript
public readonly childSoftwareSourcesInput: IResolvable | OsmanagementManagedInstanceManagementChildSoftwareSources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceGroupsInput`<sup>Optional</sup> <a name="managedInstanceGroupsInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroupsInput"></a>

```typescript
public readonly managedInstanceGroupsInput: IResolvable | OsmanagementManagedInstanceManagementManagedInstanceGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>[]

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `parentSoftwareSourceInput`<sup>Optional</sup> <a name="parentSoftwareSourceInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSourceInput"></a>

```typescript
public readonly parentSoftwareSourceInput: OsmanagementManagedInstanceManagementParentSoftwareSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsmanagementManagedInstanceManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementManagedInstanceManagementChildSoftwareSources <a name="OsmanagementManagedInstanceManagementChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

const osmanagementManagedInstanceManagementChildSoftwareSources: osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}.

---

### OsmanagementManagedInstanceManagementConfig <a name="OsmanagementManagedInstanceManagementConfig" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

const osmanagementManagedInstanceManagementConfig: osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.childSoftwareSources">childSoftwareSources</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>[]</code> | child_software_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceGroups">managedInstanceGroups</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>[]</code> | managed_instance_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.parentSoftwareSource">parentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | parent_software_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}.

---

##### `childSoftwareSources`<sup>Optional</sup> <a name="childSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.childSoftwareSources"></a>

```typescript
public readonly childSoftwareSources: IResolvable | OsmanagementManagedInstanceManagementChildSoftwareSources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>[]

child_software_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#child_software_sources OsmanagementManagedInstanceManagement#child_software_sources}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedInstanceGroups`<sup>Optional</sup> <a name="managedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceGroups"></a>

```typescript
public readonly managedInstanceGroups: IResolvable | OsmanagementManagedInstanceManagementManagedInstanceGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>[]

managed_instance_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_groups OsmanagementManagedInstanceManagement#managed_instance_groups}

---

##### `parentSoftwareSource`<sup>Optional</sup> <a name="parentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.parentSoftwareSource"></a>

```typescript
public readonly parentSoftwareSource: OsmanagementManagedInstanceManagementParentSoftwareSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

parent_software_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#parent_software_source OsmanagementManagedInstanceManagement#parent_software_source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsmanagementManagedInstanceManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#timeouts OsmanagementManagedInstanceManagement#timeouts}

---

### OsmanagementManagedInstanceManagementManagedInstanceGroups <a name="OsmanagementManagedInstanceManagementManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

const osmanagementManagedInstanceManagementManagedInstanceGroups: osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#display_name OsmanagementManagedInstanceManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#display_name OsmanagementManagedInstanceManagement#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OsmanagementManagedInstanceManagementParentSoftwareSource <a name="OsmanagementManagedInstanceManagementParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

const osmanagementManagedInstanceManagementParentSoftwareSource: osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}.

---

### OsmanagementManagedInstanceManagementTimeouts <a name="OsmanagementManagedInstanceManagementTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

const osmanagementManagedInstanceManagementTimeouts: osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementManagedInstanceManagementChildSoftwareSourcesList <a name="OsmanagementManagedInstanceManagementChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

new osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get"></a>

```typescript
public get(index: number): OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsmanagementManagedInstanceManagementChildSoftwareSources[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>[]

---


### OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference <a name="OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

new osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsmanagementManagedInstanceManagementChildSoftwareSources;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>

---


### OsmanagementManagedInstanceManagementManagedInstanceGroupsList <a name="OsmanagementManagedInstanceManagementManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

new osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get"></a>

```typescript
public get(index: number): OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsmanagementManagedInstanceManagementManagedInstanceGroups[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>[]

---


### OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference <a name="OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

new osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsmanagementManagedInstanceManagementManagedInstanceGroups;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>

---


### OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference <a name="OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

new osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsmanagementManagedInstanceManagementParentSoftwareSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---


### OsmanagementManagedInstanceManagementTimeoutsOutputReference <a name="OsmanagementManagedInstanceManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osmanagementManagedInstanceManagement } from 'rhizo-co-terraform-provider-oci'

new osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsmanagementManagedInstanceManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

---



