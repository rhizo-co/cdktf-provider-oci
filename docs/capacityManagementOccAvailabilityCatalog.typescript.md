# `capacityManagementOccAvailabilityCatalog` Submodule <a name="`capacityManagementOccAvailabilityCatalog` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccAvailabilityCatalog <a name="CapacityManagementOccAvailabilityCatalog" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog oci_capacity_management_occ_availability_catalog}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog(scope: Construct, id: string, config: CapacityManagementOccAvailabilityCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig">CapacityManagementOccAvailabilityCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig">CapacityManagementOccAvailabilityCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putMetadataDetails">putMetadataDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetMetadataDetails">resetMetadataDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadataDetails` <a name="putMetadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putMetadataDetails"></a>

```typescript
public putMetadataDetails(value: CapacityManagementOccAvailabilityCatalogMetadataDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putMetadataDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts"></a>

```typescript
public putTimeouts(value: CapacityManagementOccAvailabilityCatalogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadataDetails` <a name="resetMetadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetMetadataDetails"></a>

```typescript
public resetMetadataDetails(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CapacityManagementOccAvailabilityCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CapacityManagementOccAvailabilityCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CapacityManagementOccAvailabilityCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccAvailabilityCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.catalogState">catalogState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList">CapacityManagementOccAvailabilityCatalogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetails">metadataDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference">CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference">CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetailsInput">base64EncodedCatalogDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetailsInput">metadataDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupIdInput">occCustomerGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails">base64EncodedCatalogDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `catalogState`<sup>Required</sup> <a name="catalogState" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.catalogState"></a>

```typescript
public readonly catalogState: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.details"></a>

```typescript
public readonly details: CapacityManagementOccAvailabilityCatalogDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList">CapacityManagementOccAvailabilityCatalogDetailsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `metadataDetails`<sup>Required</sup> <a name="metadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetails"></a>

```typescript
public readonly metadataDetails: CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference">CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeouts"></a>

```typescript
public readonly timeouts: CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference">CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `base64EncodedCatalogDetailsInput`<sup>Optional</sup> <a name="base64EncodedCatalogDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetailsInput"></a>

```typescript
public readonly base64EncodedCatalogDetailsInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataDetailsInput`<sup>Optional</sup> <a name="metadataDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.metadataDetailsInput"></a>

```typescript
public readonly metadataDetailsInput: CapacityManagementOccAvailabilityCatalogMetadataDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `occCustomerGroupIdInput`<sup>Optional</sup> <a name="occCustomerGroupIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupIdInput"></a>

```typescript
public readonly occCustomerGroupIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CapacityManagementOccAvailabilityCatalogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>

---

##### `base64EncodedCatalogDetails`<sup>Required</sup> <a name="base64EncodedCatalogDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.base64EncodedCatalogDetails"></a>

```typescript
public readonly base64EncodedCatalogDetails: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.occCustomerGroupId"></a>

```typescript
public readonly occCustomerGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccAvailabilityCatalogConfig <a name="CapacityManagementOccAvailabilityCatalogConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.Initializer"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccAvailabilityCatalogConfig: capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.base64EncodedCatalogDetails">base64EncodedCatalogDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#base64encoded_catalog_details CapacityManagementOccAvailabilityCatalog#base64encoded_catalog_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#compartment_id CapacityManagementOccAvailabilityCatalog#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#display_name CapacityManagementOccAvailabilityCatalog#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#namespace CapacityManagementOccAvailabilityCatalog#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#occ_customer_group_id CapacityManagementOccAvailabilityCatalog#occ_customer_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#defined_tags CapacityManagementOccAvailabilityCatalog#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#description CapacityManagementOccAvailabilityCatalog#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#freeform_tags CapacityManagementOccAvailabilityCatalog#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#id CapacityManagementOccAvailabilityCatalog#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.metadataDetails">metadataDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | metadata_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `base64EncodedCatalogDetails`<sup>Required</sup> <a name="base64EncodedCatalogDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.base64EncodedCatalogDetails"></a>

```typescript
public readonly base64EncodedCatalogDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#base64encoded_catalog_details CapacityManagementOccAvailabilityCatalog#base64encoded_catalog_details}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#compartment_id CapacityManagementOccAvailabilityCatalog#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#display_name CapacityManagementOccAvailabilityCatalog#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#namespace CapacityManagementOccAvailabilityCatalog#namespace}.

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.occCustomerGroupId"></a>

```typescript
public readonly occCustomerGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#occ_customer_group_id CapacityManagementOccAvailabilityCatalog#occ_customer_group_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#defined_tags CapacityManagementOccAvailabilityCatalog#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#description CapacityManagementOccAvailabilityCatalog#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#freeform_tags CapacityManagementOccAvailabilityCatalog#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#id CapacityManagementOccAvailabilityCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadataDetails`<sup>Optional</sup> <a name="metadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.metadataDetails"></a>

```typescript
public readonly metadataDetails: CapacityManagementOccAvailabilityCatalogMetadataDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

metadata_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#metadata_details CapacityManagementOccAvailabilityCatalog#metadata_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CapacityManagementOccAvailabilityCatalogTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#timeouts CapacityManagementOccAvailabilityCatalog#timeouts}

---

### CapacityManagementOccAvailabilityCatalogDetails <a name="CapacityManagementOccAvailabilityCatalogDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails.Initializer"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccAvailabilityCatalogDetails: capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails = { ... }
```


### CapacityManagementOccAvailabilityCatalogMetadataDetails <a name="CapacityManagementOccAvailabilityCatalogMetadataDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails.Initializer"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccAvailabilityCatalogMetadataDetails: capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails.property.formatVersion">formatVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#format_version CapacityManagementOccAvailabilityCatalog#format_version}. |

---

##### `formatVersion`<sup>Required</sup> <a name="formatVersion" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails.property.formatVersion"></a>

```typescript
public readonly formatVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#format_version CapacityManagementOccAvailabilityCatalog#format_version}.

---

### CapacityManagementOccAvailabilityCatalogTimeouts <a name="CapacityManagementOccAvailabilityCatalogTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.Initializer"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccAvailabilityCatalogTimeouts: capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#create CapacityManagementOccAvailabilityCatalog#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#delete CapacityManagementOccAvailabilityCatalog#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#update CapacityManagementOccAvailabilityCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#create CapacityManagementOccAvailabilityCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#delete CapacityManagementOccAvailabilityCatalog#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_availability_catalog#update CapacityManagementOccAvailabilityCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccAvailabilityCatalogDetailsList <a name="CapacityManagementOccAvailabilityCatalogDetailsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.get"></a>

```typescript
public get(index: number): CapacityManagementOccAvailabilityCatalogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CapacityManagementOccAvailabilityCatalogDetailsOutputReference <a name="CapacityManagementOccAvailabilityCatalogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity">availableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder">dateFinalCustomerOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity">demandedQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity">totalAvailableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails">CapacityManagementOccAvailabilityCatalogDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableQuantity`<sup>Required</sup> <a name="availableQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.availableQuantity"></a>

```typescript
public readonly availableQuantity: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateExpectedCapacityHandover"></a>

```typescript
public readonly dateExpectedCapacityHandover: string;
```

- *Type:* string

---

##### `dateFinalCustomerOrder`<sup>Required</sup> <a name="dateFinalCustomerOrder" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.dateFinalCustomerOrder"></a>

```typescript
public readonly dateFinalCustomerOrder: string;
```

- *Type:* string

---

##### `demandedQuantity`<sup>Required</sup> <a name="demandedQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.demandedQuantity"></a>

```typescript
public readonly demandedQuantity: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `totalAvailableQuantity`<sup>Required</sup> <a name="totalAvailableQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.totalAvailableQuantity"></a>

```typescript
public readonly totalAvailableQuantity: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CapacityManagementOccAvailabilityCatalogDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogDetails">CapacityManagementOccAvailabilityCatalogDetails</a>

---


### CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference <a name="CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersionInput">formatVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion">formatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatVersionInput`<sup>Optional</sup> <a name="formatVersionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersionInput"></a>

```typescript
public readonly formatVersionInput: string;
```

- *Type:* string

---

##### `formatVersion`<sup>Required</sup> <a name="formatVersion" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.formatVersion"></a>

```typescript
public readonly formatVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CapacityManagementOccAvailabilityCatalogMetadataDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogMetadataDetails">CapacityManagementOccAvailabilityCatalogMetadataDetails</a>

---


### CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference <a name="CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer"></a>

```typescript
import { capacityManagementOccAvailabilityCatalog } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccAvailabilityCatalogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccAvailabilityCatalog.CapacityManagementOccAvailabilityCatalogTimeouts">CapacityManagementOccAvailabilityCatalogTimeouts</a>

---



