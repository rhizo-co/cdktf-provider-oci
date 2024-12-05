# `osManagementHubSoftwareSourceChangeAvailabilityManagement` Submodule <a name="`osManagementHubSoftwareSourceChangeAvailabilityManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubSoftwareSourceChangeAvailabilityManagement <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagement" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management oci_os_management_hub_software_source_change_availability_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement(scope: Construct, id: string, config: OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig">OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig">OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putSoftwareSourceAvailabilities">putSoftwareSourceAvailabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSoftwareSourceAvailabilities` <a name="putSoftwareSourceAvailabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putSoftwareSourceAvailabilities"></a>

```typescript
public putSoftwareSourceAvailabilities(value: IResolvable | OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putSoftwareSourceAvailabilities.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubSoftwareSourceChangeAvailabilityManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubSoftwareSourceChangeAvailabilityManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubSoftwareSourceChangeAvailabilityManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubSoftwareSourceChangeAvailabilityManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubSoftwareSourceChangeAvailabilityManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilities">softwareSourceAvailabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilitiesInput">softwareSourceAvailabilitiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `softwareSourceAvailabilities`<sup>Required</sup> <a name="softwareSourceAvailabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilities"></a>

```typescript
public readonly softwareSourceAvailabilities: OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `softwareSourceAvailabilitiesInput`<sup>Optional</sup> <a name="softwareSourceAvailabilitiesInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilitiesInput"></a>

```typescript
public readonly softwareSourceAvailabilitiesInput: IResolvable | OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubSoftwareSourceChangeAvailabilityManagementConfig: osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.softwareSourceAvailabilities">softwareSourceAvailabilities</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>[]</code> | software_source_availabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#id OsManagementHubSoftwareSourceChangeAvailabilityManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `softwareSourceAvailabilities`<sup>Required</sup> <a name="softwareSourceAvailabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.softwareSourceAvailabilities"></a>

```typescript
public readonly softwareSourceAvailabilities: IResolvable | OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>[]

software_source_availabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_availabilities OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_availabilities}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#id OsManagementHubSoftwareSourceChangeAvailabilityManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#timeouts OsManagementHubSoftwareSourceChangeAvailabilityManagement#timeouts}

---

### OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities: osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_id OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availability">availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availabilityAtOci">availabilityAtOci</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability_at_oci OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability_at_oci}. |

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_id OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_id}.

---

##### `availability`<sup>Optional</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability}.

---

##### `availabilityAtOci`<sup>Optional</sup> <a name="availabilityAtOci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availabilityAtOci"></a>

```typescript
public readonly availabilityAtOci: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability_at_oci OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability_at_oci}.

---

### OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts: osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#create OsManagementHubSoftwareSourceChangeAvailabilityManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#delete OsManagementHubSoftwareSourceChangeAvailabilityManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#update OsManagementHubSoftwareSourceChangeAvailabilityManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#create OsManagementHubSoftwareSourceChangeAvailabilityManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#delete OsManagementHubSoftwareSourceChangeAvailabilityManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#update OsManagementHubSoftwareSourceChangeAvailabilityManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.get"></a>

```typescript
public get(index: number): OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>[]

---


### OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailability">resetAvailability</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailabilityAtOci">resetAvailabilityAtOci</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailability` <a name="resetAvailability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailability"></a>

```typescript
public resetAvailability(): void
```

##### `resetAvailabilityAtOci` <a name="resetAvailabilityAtOci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailabilityAtOci"></a>

```typescript
public resetAvailabilityAtOci(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOciInput">availabilityAtOciInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityInput">availabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availability">availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOci">availabilityAtOci</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityAtOciInput`<sup>Optional</sup> <a name="availabilityAtOciInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOciInput"></a>

```typescript
public readonly availabilityAtOciInput: string;
```

- *Type:* string

---

##### `availabilityInput`<sup>Optional</sup> <a name="availabilityInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityInput"></a>

```typescript
public readonly availabilityInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availability"></a>

```typescript
public readonly availability: string;
```

- *Type:* string

---

##### `availabilityAtOci`<sup>Required</sup> <a name="availabilityAtOci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOci"></a>

```typescript
public readonly availabilityAtOci: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities</a>

---


### OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubSoftwareSourceChangeAvailabilityManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>

---



