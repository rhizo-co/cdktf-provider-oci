# `capacityManagementOccCapacityRequest` Submodule <a name="`capacityManagementOccCapacityRequest` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccCapacityRequest <a name="CapacityManagementOccCapacityRequest" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request oci_capacity_management_occ_capacity_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest(scope: Construct, id: string, config: CapacityManagementOccCapacityRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig">CapacityManagementOccCapacityRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig">CapacityManagementOccCapacityRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations">putPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetLifecycleDetails">resetLifecycleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetPatchOperations">resetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestState">resetRequestState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestType">resetRequestType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails"></a>

```typescript
public putDetails(value: IResolvable | CapacityManagementOccCapacityRequestDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>[]

---

##### `putPatchOperations` <a name="putPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations"></a>

```typescript
public putPatchOperations(value: IResolvable | CapacityManagementOccCapacityRequestPatchOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts"></a>

```typescript
public putTimeouts(value: CapacityManagementOccCapacityRequestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifecycleDetails` <a name="resetLifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetLifecycleDetails"></a>

```typescript
public resetLifecycleDetails(): void
```

##### `resetPatchOperations` <a name="resetPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetPatchOperations"></a>

```typescript
public resetPatchOperations(): void
```

##### `resetRequestState` <a name="resetRequestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestState"></a>

```typescript
public resetRequestState(): void
```

##### `resetRequestType` <a name="resetRequestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestType"></a>

```typescript
public resetRequestType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CapacityManagementOccCapacityRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CapacityManagementOccCapacityRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccCapacityRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList">CapacityManagementOccCapacityRequestDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList">CapacityManagementOccCapacityRequestPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference">CapacityManagementOccCapacityRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandoverInput">dateExpectedCapacityHandoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.detailsInput">detailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetailsInput">lifecycleDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogIdInput">occAvailabilityCatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperationsInput">patchOperationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestStateInput">requestStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestTypeInput">requestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestState">requestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.details"></a>

```typescript
public readonly details: CapacityManagementOccCapacityRequestDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList">CapacityManagementOccCapacityRequestDetailsList</a>

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occCustomerGroupId"></a>

```typescript
public readonly occCustomerGroupId: string;
```

- *Type:* string

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperations"></a>

```typescript
public readonly patchOperations: CapacityManagementOccCapacityRequestPatchOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList">CapacityManagementOccCapacityRequestPatchOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeouts"></a>

```typescript
public readonly timeouts: CapacityManagementOccCapacityRequestTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference">CapacityManagementOccCapacityRequestTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dateExpectedCapacityHandoverInput`<sup>Optional</sup> <a name="dateExpectedCapacityHandoverInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandoverInput"></a>

```typescript
public readonly dateExpectedCapacityHandoverInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.detailsInput"></a>

```typescript
public readonly detailsInput: IResolvable | CapacityManagementOccCapacityRequestDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleDetailsInput`<sup>Optional</sup> <a name="lifecycleDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetailsInput"></a>

```typescript
public readonly lifecycleDetailsInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `occAvailabilityCatalogIdInput`<sup>Optional</sup> <a name="occAvailabilityCatalogIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogIdInput"></a>

```typescript
public readonly occAvailabilityCatalogIdInput: string;
```

- *Type:* string

---

##### `patchOperationsInput`<sup>Optional</sup> <a name="patchOperationsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperationsInput"></a>

```typescript
public readonly patchOperationsInput: IResolvable | CapacityManagementOccCapacityRequestPatchOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `requestStateInput`<sup>Optional</sup> <a name="requestStateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestStateInput"></a>

```typescript
public readonly requestStateInput: string;
```

- *Type:* string

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestTypeInput"></a>

```typescript
public readonly requestTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CapacityManagementOccCapacityRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover"></a>

```typescript
public readonly dateExpectedCapacityHandover: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `occAvailabilityCatalogId`<sup>Required</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId"></a>

```typescript
public readonly occAvailabilityCatalogId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `requestState`<sup>Required</sup> <a name="requestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestState"></a>

```typescript
public readonly requestState: string;
```

- *Type:* string

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccCapacityRequestConfig <a name="CapacityManagementOccCapacityRequestConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccCapacityRequestConfig: capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.details">details</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>[]</code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.patchOperations">patchOperations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>[]</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestState">requestState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestType">requestType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}.

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dateExpectedCapacityHandover"></a>

```typescript
public readonly dateExpectedCapacityHandover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}.

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.details"></a>

```typescript
public readonly details: IResolvable | CapacityManagementOccCapacityRequestDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>[]

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#details CapacityManagementOccCapacityRequest#details}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}.

---

##### `occAvailabilityCatalogId`<sup>Required</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.occAvailabilityCatalogId"></a>

```typescript
public readonly occAvailabilityCatalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleDetails`<sup>Optional</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}.

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.patchOperations"></a>

```typescript
public readonly patchOperations: IResolvable | CapacityManagementOccCapacityRequestPatchOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>[]

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#patch_operations CapacityManagementOccCapacityRequest#patch_operations}

---

##### `requestState`<sup>Optional</sup> <a name="requestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestState"></a>

```typescript
public readonly requestState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}.

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CapacityManagementOccCapacityRequestTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#timeouts CapacityManagementOccCapacityRequest#timeouts}

---

### CapacityManagementOccCapacityRequestDetails <a name="CapacityManagementOccCapacityRequestDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccCapacityRequestDetails: capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.demandQuantity">demandQuantity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#demand_quantity CapacityManagementOccCapacityRequest#demand_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceName">resourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_name CapacityManagementOccCapacityRequest#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_type CapacityManagementOccCapacityRequest#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.workloadType">workloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#workload_type CapacityManagementOccCapacityRequest#workload_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.actualHandoverQuantity">actualHandoverQuantity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#actual_handover_quantity CapacityManagementOccCapacityRequest#actual_handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.associatedOccHandoverResourceBlockList">associatedOccHandoverResourceBlockList</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>[]</code> | associated_occ_handover_resource_block_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateActualHandover">dateActualHandover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_actual_handover CapacityManagementOccCapacityRequest#date_actual_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateExpectedHandover">dateExpectedHandover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_handover CapacityManagementOccCapacityRequest#date_expected_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.expectedHandoverQuantity">expectedHandoverQuantity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#expected_handover_quantity CapacityManagementOccCapacityRequest#expected_handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.sourceWorkloadType">sourceWorkloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#source_workload_type CapacityManagementOccCapacityRequest#source_workload_type}. |

---

##### `demandQuantity`<sup>Required</sup> <a name="demandQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.demandQuantity"></a>

```typescript
public readonly demandQuantity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#demand_quantity CapacityManagementOccCapacityRequest#demand_quantity}.

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_name CapacityManagementOccCapacityRequest#resource_name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_type CapacityManagementOccCapacityRequest#resource_type}.

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#workload_type CapacityManagementOccCapacityRequest#workload_type}.

---

##### `actualHandoverQuantity`<sup>Optional</sup> <a name="actualHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.actualHandoverQuantity"></a>

```typescript
public readonly actualHandoverQuantity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#actual_handover_quantity CapacityManagementOccCapacityRequest#actual_handover_quantity}.

---

##### `associatedOccHandoverResourceBlockList`<sup>Optional</sup> <a name="associatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.associatedOccHandoverResourceBlockList"></a>

```typescript
public readonly associatedOccHandoverResourceBlockList: IResolvable | CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>[]

associated_occ_handover_resource_block_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#associated_occ_handover_resource_block_list CapacityManagementOccCapacityRequest#associated_occ_handover_resource_block_list}

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `dateActualHandover`<sup>Optional</sup> <a name="dateActualHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateActualHandover"></a>

```typescript
public readonly dateActualHandover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_actual_handover CapacityManagementOccCapacityRequest#date_actual_handover}.

---

##### `dateExpectedHandover`<sup>Optional</sup> <a name="dateExpectedHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateExpectedHandover"></a>

```typescript
public readonly dateExpectedHandover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_handover CapacityManagementOccCapacityRequest#date_expected_handover}.

---

##### `expectedHandoverQuantity`<sup>Optional</sup> <a name="expectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.expectedHandoverQuantity"></a>

```typescript
public readonly expectedHandoverQuantity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#expected_handover_quantity CapacityManagementOccCapacityRequest#expected_handover_quantity}.

---

##### `sourceWorkloadType`<sup>Optional</sup> <a name="sourceWorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.sourceWorkloadType"></a>

```typescript
public readonly sourceWorkloadType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#source_workload_type CapacityManagementOccCapacityRequest#source_workload_type}.

---

### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct: capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.handoverQuantity">handoverQuantity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#handover_quantity CapacityManagementOccCapacityRequest#handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_handover_resource_block_id CapacityManagementOccCapacityRequest#occ_handover_resource_block_id}. |

---

##### `handoverQuantity`<sup>Optional</sup> <a name="handoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.handoverQuantity"></a>

```typescript
public readonly handoverQuantity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#handover_quantity CapacityManagementOccCapacityRequest#handover_quantity}.

---

##### `occHandoverResourceBlockId`<sup>Optional</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.occHandoverResourceBlockId"></a>

```typescript
public readonly occHandoverResourceBlockId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_handover_resource_block_id CapacityManagementOccCapacityRequest#occ_handover_resource_block_id}.

---

### CapacityManagementOccCapacityRequestPatchOperations <a name="CapacityManagementOccCapacityRequestPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccCapacityRequestPatchOperations: capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.from">from</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#from CapacityManagementOccCapacityRequest#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#operation CapacityManagementOccCapacityRequest#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selection">selection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selection CapacityManagementOccCapacityRequest#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.value">value</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#value CapacityManagementOccCapacityRequest#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.position">position</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#position CapacityManagementOccCapacityRequest#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selectedItem">selectedItem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selected_item CapacityManagementOccCapacityRequest#selected_item}. |

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#from CapacityManagementOccCapacityRequest#from}.

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#operation CapacityManagementOccCapacityRequest#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selection CapacityManagementOccCapacityRequest#selection}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.value"></a>

```typescript
public readonly value: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#value CapacityManagementOccCapacityRequest#value}.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#position CapacityManagementOccCapacityRequest#position}.

---

##### `selectedItem`<sup>Optional</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selectedItem"></a>

```typescript
public readonly selectedItem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selected_item CapacityManagementOccCapacityRequest#selected_item}.

---

### CapacityManagementOccCapacityRequestTimeouts <a name="CapacityManagementOccCapacityRequestTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

const capacityManagementOccCapacityRequestTimeouts: capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```typescript
public get(index: number): CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>[]

---


### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetHandoverQuantity">resetHandoverQuantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetOccHandoverResourceBlockId">resetOccHandoverResourceBlockId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHandoverQuantity` <a name="resetHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetHandoverQuantity"></a>

```typescript
public resetHandoverQuantity(): void
```

##### `resetOccHandoverResourceBlockId` <a name="resetOccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetOccHandoverResourceBlockId"></a>

```typescript
public resetOccHandoverResourceBlockId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantityInput">handoverQuantityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockIdInput">occHandoverResourceBlockIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">handoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `handoverQuantityInput`<sup>Optional</sup> <a name="handoverQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantityInput"></a>

```typescript
public readonly handoverQuantityInput: string;
```

- *Type:* string

---

##### `occHandoverResourceBlockIdInput`<sup>Optional</sup> <a name="occHandoverResourceBlockIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockIdInput"></a>

```typescript
public readonly occHandoverResourceBlockIdInput: string;
```

- *Type:* string

---

##### `handoverQuantity`<sup>Required</sup> <a name="handoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```typescript
public readonly handoverQuantity: string;
```

- *Type:* string

---

##### `occHandoverResourceBlockId`<sup>Required</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```typescript
public readonly occHandoverResourceBlockId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>

---


### CapacityManagementOccCapacityRequestDetailsList <a name="CapacityManagementOccCapacityRequestDetailsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get"></a>

```typescript
public get(index: number): CapacityManagementOccCapacityRequestDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCapacityRequestDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>[]

---


### CapacityManagementOccCapacityRequestDetailsOutputReference <a name="CapacityManagementOccCapacityRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList">putAssociatedOccHandoverResourceBlockList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetActualHandoverQuantity">resetActualHandoverQuantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAssociatedOccHandoverResourceBlockList">resetAssociatedOccHandoverResourceBlockList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateActualHandover">resetDateActualHandover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateExpectedHandover">resetDateExpectedHandover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetExpectedHandoverQuantity">resetExpectedHandoverQuantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetSourceWorkloadType">resetSourceWorkloadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssociatedOccHandoverResourceBlockList` <a name="putAssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList"></a>

```typescript
public putAssociatedOccHandoverResourceBlockList(value: IResolvable | CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>[]

---

##### `resetActualHandoverQuantity` <a name="resetActualHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetActualHandoverQuantity"></a>

```typescript
public resetActualHandoverQuantity(): void
```

##### `resetAssociatedOccHandoverResourceBlockList` <a name="resetAssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAssociatedOccHandoverResourceBlockList"></a>

```typescript
public resetAssociatedOccHandoverResourceBlockList(): void
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDateActualHandover` <a name="resetDateActualHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateActualHandover"></a>

```typescript
public resetDateActualHandover(): void
```

##### `resetDateExpectedHandover` <a name="resetDateExpectedHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateExpectedHandover"></a>

```typescript
public resetDateExpectedHandover(): void
```

##### `resetExpectedHandoverQuantity` <a name="resetExpectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetExpectedHandoverQuantity"></a>

```typescript
public resetExpectedHandoverQuantity(): void
```

##### `resetSourceWorkloadType` <a name="resetSourceWorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetSourceWorkloadType"></a>

```typescript
public resetSourceWorkloadType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList">associatedOccHandoverResourceBlockList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantityInput">actualHandoverQuantityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockListInput">associatedOccHandoverResourceBlockListInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandoverInput">dateActualHandoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandoverInput">dateExpectedHandoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantityInput">demandQuantityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantityInput">expectedHandoverQuantityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadTypeInput">sourceWorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity">actualHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover">dateActualHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover">dateExpectedHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity">demandQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity">expectedHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType">sourceWorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associatedOccHandoverResourceBlockList`<sup>Required</sup> <a name="associatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```typescript
public readonly associatedOccHandoverResourceBlockList: CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `actualHandoverQuantityInput`<sup>Optional</sup> <a name="actualHandoverQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantityInput"></a>

```typescript
public readonly actualHandoverQuantityInput: string;
```

- *Type:* string

---

##### `associatedOccHandoverResourceBlockListInput`<sup>Optional</sup> <a name="associatedOccHandoverResourceBlockListInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockListInput"></a>

```typescript
public readonly associatedOccHandoverResourceBlockListInput: IResolvable | CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>[]

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `dateActualHandoverInput`<sup>Optional</sup> <a name="dateActualHandoverInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandoverInput"></a>

```typescript
public readonly dateActualHandoverInput: string;
```

- *Type:* string

---

##### `dateExpectedHandoverInput`<sup>Optional</sup> <a name="dateExpectedHandoverInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandoverInput"></a>

```typescript
public readonly dateExpectedHandoverInput: string;
```

- *Type:* string

---

##### `demandQuantityInput`<sup>Optional</sup> <a name="demandQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantityInput"></a>

```typescript
public readonly demandQuantityInput: string;
```

- *Type:* string

---

##### `expectedHandoverQuantityInput`<sup>Optional</sup> <a name="expectedHandoverQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantityInput"></a>

```typescript
public readonly expectedHandoverQuantityInput: string;
```

- *Type:* string

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceNameInput"></a>

```typescript
public readonly resourceNameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `sourceWorkloadTypeInput`<sup>Optional</sup> <a name="sourceWorkloadTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadTypeInput"></a>

```typescript
public readonly sourceWorkloadTypeInput: string;
```

- *Type:* string

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadTypeInput"></a>

```typescript
public readonly workloadTypeInput: string;
```

- *Type:* string

---

##### `actualHandoverQuantity`<sup>Required</sup> <a name="actualHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity"></a>

```typescript
public readonly actualHandoverQuantity: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `dateActualHandover`<sup>Required</sup> <a name="dateActualHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover"></a>

```typescript
public readonly dateActualHandover: string;
```

- *Type:* string

---

##### `dateExpectedHandover`<sup>Required</sup> <a name="dateExpectedHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover"></a>

```typescript
public readonly dateExpectedHandover: string;
```

- *Type:* string

---

##### `demandQuantity`<sup>Required</sup> <a name="demandQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity"></a>

```typescript
public readonly demandQuantity: string;
```

- *Type:* string

---

##### `expectedHandoverQuantity`<sup>Required</sup> <a name="expectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity"></a>

```typescript
public readonly expectedHandoverQuantity: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `sourceWorkloadType`<sup>Required</sup> <a name="sourceWorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType"></a>

```typescript
public readonly sourceWorkloadType: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCapacityRequestDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>

---


### CapacityManagementOccCapacityRequestPatchOperationsList <a name="CapacityManagementOccCapacityRequestPatchOperationsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get"></a>

```typescript
public get(index: number): CapacityManagementOccCapacityRequestPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCapacityRequestPatchOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>[]

---


### CapacityManagementOccCapacityRequestPatchOperationsOutputReference <a name="CapacityManagementOccCapacityRequestPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetSelectedItem">resetSelectedItem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPosition` <a name="resetPosition" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetSelectedItem` <a name="resetSelectedItem" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetSelectedItem"></a>

```typescript
public resetSelectedItem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fromInput">fromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.positionInput">positionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItemInput">selectedItemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectionInput">selectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.valueInput">valueInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position">position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection">selection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value">value</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.positionInput"></a>

```typescript
public readonly positionInput: string;
```

- *Type:* string

---

##### `selectedItemInput`<sup>Optional</sup> <a name="selectedItemInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItemInput"></a>

```typescript
public readonly selectedItemInput: string;
```

- *Type:* string

---

##### `selectionInput`<sup>Optional</sup> <a name="selectionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectionInput"></a>

```typescript
public readonly selectionInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position"></a>

```typescript
public readonly position: string;
```

- *Type:* string

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem"></a>

```typescript
public readonly selectedItem: string;
```

- *Type:* string

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection"></a>

```typescript
public readonly selection: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value"></a>

```typescript
public readonly value: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCapacityRequestPatchOperations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>

---


### CapacityManagementOccCapacityRequestTimeoutsOutputReference <a name="CapacityManagementOccCapacityRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer"></a>

```typescript
import { capacityManagementOccCapacityRequest } from 'rhizo-co-terraform-provider-oci'

new capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CapacityManagementOccCapacityRequestTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

---



