# `osManagementHubManagementStationSynchronizeMirrorsManagement` Submodule <a name="`osManagementHubManagementStationSynchronizeMirrorsManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagementStationSynchronizeMirrorsManagement <a name="OsManagementHubManagementStationSynchronizeMirrorsManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management oci_os_management_hub_management_station_synchronize_mirrors_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer"></a>

```typescript
import { osManagementHubManagementStationSynchronizeMirrorsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement(scope: Construct, id: string, config: OsManagementHubManagementStationSynchronizeMirrorsManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig">OsManagementHubManagementStationSynchronizeMirrorsManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig">OsManagementHubManagementStationSynchronizeMirrorsManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagementStationSynchronizeMirrorsManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isConstruct"></a>

```typescript
import { osManagementHubManagementStationSynchronizeMirrorsManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformElement"></a>

```typescript
import { osManagementHubManagementStationSynchronizeMirrorsManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformResource"></a>

```typescript
import { osManagementHubManagementStationSynchronizeMirrorsManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubManagementStationSynchronizeMirrorsManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubManagementStationSynchronizeMirrorsManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubManagementStationSynchronizeMirrorsManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubManagementStationSynchronizeMirrorsManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagementStationSynchronizeMirrorsManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.managementStationIdInput">managementStationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.softwareSourceListInput">softwareSourceListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.managementStationId">managementStationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.softwareSourceList">softwareSourceList</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementStationIdInput`<sup>Optional</sup> <a name="managementStationIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.managementStationIdInput"></a>

```typescript
public readonly managementStationIdInput: string;
```

- *Type:* string

---

##### `softwareSourceListInput`<sup>Optional</sup> <a name="softwareSourceListInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.softwareSourceListInput"></a>

```typescript
public readonly softwareSourceListInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementStationId`<sup>Required</sup> <a name="managementStationId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.managementStationId"></a>

```typescript
public readonly managementStationId: string;
```

- *Type:* string

---

##### `softwareSourceList`<sup>Required</sup> <a name="softwareSourceList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.softwareSourceList"></a>

```typescript
public readonly softwareSourceList: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagementStationSynchronizeMirrorsManagementConfig <a name="OsManagementHubManagementStationSynchronizeMirrorsManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.Initializer"></a>

```typescript
import { osManagementHubManagementStationSynchronizeMirrorsManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagementStationSynchronizeMirrorsManagementConfig: osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.managementStationId">managementStationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#management_station_id OsManagementHubManagementStationSynchronizeMirrorsManagement#management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.softwareSourceList">softwareSourceList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#software_source_list OsManagementHubManagementStationSynchronizeMirrorsManagement#software_source_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#id OsManagementHubManagementStationSynchronizeMirrorsManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managementStationId`<sup>Required</sup> <a name="managementStationId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.managementStationId"></a>

```typescript
public readonly managementStationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#management_station_id OsManagementHubManagementStationSynchronizeMirrorsManagement#management_station_id}.

---

##### `softwareSourceList`<sup>Required</sup> <a name="softwareSourceList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.softwareSourceList"></a>

```typescript
public readonly softwareSourceList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#software_source_list OsManagementHubManagementStationSynchronizeMirrorsManagement#software_source_list}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#id OsManagementHubManagementStationSynchronizeMirrorsManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#timeouts OsManagementHubManagementStationSynchronizeMirrorsManagement#timeouts}

---

### OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts <a name="OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubManagementStationSynchronizeMirrorsManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubManagementStationSynchronizeMirrorsManagementTimeouts: osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#create OsManagementHubManagementStationSynchronizeMirrorsManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#delete OsManagementHubManagementStationSynchronizeMirrorsManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#update OsManagementHubManagementStationSynchronizeMirrorsManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#create OsManagementHubManagementStationSynchronizeMirrorsManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#delete OsManagementHubManagementStationSynchronizeMirrorsManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_synchronize_mirrors_management#update OsManagementHubManagementStationSynchronizeMirrorsManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference <a name="OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubManagementStationSynchronizeMirrorsManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationSynchronizeMirrorsManagement.OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts">OsManagementHubManagementStationSynchronizeMirrorsManagementTimeouts</a>

---



