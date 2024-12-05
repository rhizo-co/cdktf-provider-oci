# `osManagementHubLifecycleStagePromoteSoftwareSourceManagement` Submodule <a name="`osManagementHubLifecycleStagePromoteSoftwareSourceManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagement <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management oci_os_management_hub_lifecycle_stage_promote_software_source_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement(scope: Construct, id: string, config: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails">putWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetWorkRequestDetails">resetWorkRequestDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>

---

##### `putWorkRequestDetails` <a name="putWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails"></a>

```typescript
public putWorkRequestDetails(value: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.putWorkRequestDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetSoftwareSourceId"></a>

```typescript
public resetSoftwareSourceId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkRequestDetails` <a name="resetWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.resetWorkRequestDetails"></a>

```typescript
public resetWorkRequestDetails(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubLifecycleStagePromoteSoftwareSourceManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OsManagementHubLifecycleStagePromoteSoftwareSourceManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsManagementHubLifecycleStagePromoteSoftwareSourceManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsManagementHubLifecycleStagePromoteSoftwareSourceManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubLifecycleStagePromoteSoftwareSourceManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageIdInput">lifecycleStageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetailsInput">workRequestDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageId">lifecycleStageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference</a>

---

##### `workRequestDetails`<sup>Required</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleStageIdInput`<sup>Optional</sup> <a name="lifecycleStageIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageIdInput"></a>

```typescript
public readonly lifecycleStageIdInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>

---

##### `workRequestDetailsInput`<sup>Optional</sup> <a name="workRequestDetailsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.workRequestDetailsInput"></a>

```typescript
public readonly workRequestDetailsInput: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleStageId`<sup>Required</sup> <a name="lifecycleStageId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.lifecycleStageId"></a>

```typescript
public readonly lifecycleStageId: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.Initializer"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig: osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycleStageId">lifecycleStageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#lifecycle_stage_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#lifecycle_stage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#software_source_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.workRequestDetails">workRequestDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | work_request_details block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleStageId`<sup>Required</sup> <a name="lifecycleStageId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.lifecycleStageId"></a>

```typescript
public readonly lifecycleStageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#lifecycle_stage_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#lifecycle_stage_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#software_source_id OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#software_source_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#timeouts OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#timeouts}

---

##### `workRequestDetails`<sup>Optional</sup> <a name="workRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementConfig.property.workRequestDetails"></a>

```typescript
public readonly workRequestDetails: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

work_request_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#work_request_details OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#work_request_details}

---

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.Initializer"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts: osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#create OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#delete OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#update OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#create OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#delete OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#update OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#update}.

---

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.Initializer"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

const osManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails: osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#description OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#display_name OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#display_name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#description OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_stage_promote_software_source_management#display_name OsManagementHubLifecycleStagePromoteSoftwareSourceManagement#display_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementTimeouts</a>

---


### OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference <a name="OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer"></a>

```typescript
import { osManagementHubLifecycleStagePromoteSoftwareSourceManagement } from 'rhizo-co-terraform-provider-oci'

new osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleStagePromoteSoftwareSourceManagement.OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails">OsManagementHubLifecycleStagePromoteSoftwareSourceManagementWorkRequestDetails</a>

---



